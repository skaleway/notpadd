"use server";

import { MAX_SPACE_BASIC_ACCOUNT, MAX_SPACE_FREE_ACCOUNT } from "@/constants";
import { db } from "./db";
import { getCurrentUser } from "./current-user";
import { AccountType } from "@prisma/client";

export async function incrementCount(userId: string) {
  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId,
    },
  });

  if (spaceLimit) {
    await db.userSpaceList.update({
      where: {
        userId,
      },
      data: {
        count: spaceLimit.count + 1,
      },
    });
  } else {
    await db.userSpaceList.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
}

export async function decrementCount(userId: string) {
  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId,
    },
  });

  if (spaceLimit) {
    await db.userSpaceList.update({
      where: {
        userId,
      },
      data: {
        count: spaceLimit.count > 0 ? spaceLimit.count - 1 : 0,
      },
    });
  } else {
    await db.userSpaceList.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
}

export async function hasAvailableSpaceCount(
  userId: string,
  userType: AccountType
) {
  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId,
    },
  });

  if (
    !spaceLimit ||
    (userType === "Free" && spaceLimit.count < MAX_SPACE_FREE_ACCOUNT) ||
    (userType === "Basic" && spaceLimit.count < MAX_SPACE_BASIC_ACCOUNT)
  ) {
    return true;
  }

  return false;
}

export async function getSpaceLimit(userId: string) {
  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId,
    },
  });

  if (spaceLimit) return spaceLimit.count;

  return 0;
}
