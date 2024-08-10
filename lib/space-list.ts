"use server";

import { MAX_SPACE_BASIC_ACCOUNT, MAX_SPACE_FREE_ACCOUNT } from "@/constants";
import { db } from "./db";
import { getCurrentUser } from "./current-user";

async function checkSpace(spaceKey: string) {
  const space = await db.space.findUnique({
    where: {
      key: spaceKey,
    },
  });

  if (!space) throw new Error("Space not found");

  return space;
}

async function checkUser() {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  return user;
}

export async function incrementCount(spaceKey: string) {
  const space = await checkSpace(spaceKey);
  const user = await checkUser();

  if (!space) return;

  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId: user.userId,
      spaceKey: space.key,
    },
  });

  if (spaceLimit) {
    await db.userSpaceList.update({
      where: {
        userId: user.userId,
        spaceKey: space.key,
      },
      data: {
        count: spaceLimit.count + 1,
      },
    });
  } else {
    await db.userSpaceList.create({
      data: {
        spaceKey: space.key,
        userId: user.id,
        count: 1,
      },
    });
  }
}

export async function decrementCount(spaceKey: string) {
  const user = await checkUser();
  const space = await checkSpace(spaceKey);

  if (!space) return;

  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId: user.userId,
      spaceKey: space.key,
    },
  });

  if (spaceLimit) {
    await db.userSpaceList.update({
      where: {
        userId: user.userId,
        spaceKey: space.key,
      },
      data: {
        count: spaceLimit.count > 0 ? spaceLimit.count - 1 : 0,
      },
    });
  } else {
    await db.userSpaceList.create({
      data: {
        spaceKey: space.key,
        userId: user.id,
        count: 1,
      },
    });
  }
}

export async function hasAvailableSpaceCount(spaceKey: string) {
  const space = await checkSpace(spaceKey);
  const user = await checkUser();

  if (!space) return;

  const userType = user.accounttype;

  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId: user.userId,
      spaceKey: space.key,
    },
  });

  if (spaceLimit) {
    if (userType === "Free" && spaceLimit.count < MAX_SPACE_FREE_ACCOUNT) {
      return true;
    }

    if (userType === "Basic" && spaceLimit.count < MAX_SPACE_BASIC_ACCOUNT) {
      return true;
    }
  }

  return false;
}

export async function getSpaceLimit(spaceKey: string) {
  const space = await checkSpace(spaceKey);
  const user = await checkUser();

  if (!space) return;

  const spaceLimit = await db.userSpaceList.findUnique({
    where: {
      userId: user.userId,
      spaceKey: space.key,
    },
  });

  if (spaceLimit) return spaceLimit.count;

  return 0;
}
