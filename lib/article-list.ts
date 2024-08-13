"use server";

import {
  MAX_ARTICLE_BASIC_ACCOUNT,
  MAX_ARTICLE_FREE_ACCOUNT,
} from "@/constants";
import { db } from "./db";

export async function incrementArticleCount(userId: string, spaceKey: string) {
  const articleLimit = await db.userArticleList.findUnique({
    where: {
      userId,
      spaceKey,
    },
  });

  if (articleLimit) {
    await db.userArticleList.update({
      where: {
        userId,
        spaceKey,
      },
      data: {
        count: articleLimit.count + 1,
      },
    });
  } else {
    await db.userArticleList.create({
      data: {
        spaceKey,
        userId,
        count: 1,
      },
    });
  }
}

export async function decrementArticleCount(userId: string, spaceKey: string) {
  const spaceLimit = await db.userArticleList.findUnique({
    where: {
      spaceKey,
      userId,
    },
  });

  if (spaceLimit) {
    await db.userArticleList.update({
      where: {
        spaceKey,
        userId,
      },
      data: {
        count: spaceLimit.count > 0 ? spaceLimit.count - 1 : 0,
      },
    });
  } else {
    await db.userArticleList.create({
      data: {
        spaceKey,
        userId,
        count: 1,
      },
    });
  }
}

export async function hasAvailableArticleCount(
  userId: string,
  spaceKey: string,
  userType: string
) {
  const spaceLimit = await db.userArticleList.findUnique({
    where: {
      userId,
      spaceKey,
    },
  });

  if (spaceLimit) {
    if (userType === "Free" && spaceLimit.count < MAX_ARTICLE_FREE_ACCOUNT) {
      return true;
    }

    if (userType === "Basic" && spaceLimit.count < MAX_ARTICLE_BASIC_ACCOUNT) {
      return true;
    }

    return false;
  }
}

export async function getArticleLimit(userId: string, spaceKey: string) {
  const spaceLimit = await db.userArticleList.findUnique({
    where: {
      spaceKey,
      userId,
    },
  });

  if (spaceLimit) return spaceLimit.count;

  return 0;
}
