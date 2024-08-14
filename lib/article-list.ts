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
  const articleLimit = await db.userArticleList.findUnique({
    where: {
      spaceKey,
      userId,
    },
  });

  if (articleLimit) {
    await db.userArticleList.update({
      where: {
        spaceKey,
        userId,
      },
      data: {
        count: articleLimit.count > 0 ? articleLimit.count - 1 : 0,
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
  const articleLimit = await db.userArticleList.findUnique({
    where: {
      userId,
      spaceKey,
    },
  });
  if (
    !articleLimit ||
    (userType === "Free" && articleLimit.count < MAX_ARTICLE_FREE_ACCOUNT) ||
    (userType === "Basic" && articleLimit.count < MAX_ARTICLE_BASIC_ACCOUNT)
  ) {
    return true;
  }

  return false;
}

export async function getArticleLimit(userId: string, spaceKey: string) {
  const articleLimit = await db.userArticleList.findUnique({
    where: {
      spaceKey,
      userId,
    },
  });

  if (articleLimit) return articleLimit.count;

  return 0;
}
