"use server";

import { utapi } from "@/app/server/uploadthing";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import {
  createSpaceSchema,
  deleteName,
  DeleteType,
  Space,
} from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { generateId } from "./generate-id";
import {
  decrementCount,
  hasAvailableSpaceCount,
  incrementCount,
} from "@/lib/space-list";
import {
  decrementArticleCount,
  hasAvailableArticleCount,
  incrementArticleCount,
} from "@/lib/article-list";

async function checkSpace(spaceId: string) {
  const space = await db.space.findUnique({
    where: {
      id: spaceId,
    },
  });

  if (!space) return;

  return space;
}

export async function createNewNote(data: Space, spaceId: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const validData = createSpaceSchema.safeParse(data);

  if (!validData.success) throw new Error("Data not valid");

  const slug = data.title.trim().split(" ").join("-");

  const space = await checkSpace(spaceId);

  const userArticles = await db.article.findMany({
    where: {
      userId: user.id,
    },
  });

  const eleWithSlug = userArticles.find((article) => article.slug === slug);

  if (eleWithSlug)
    throw new Error("Can't create two articles in a space with same title");

  const hasArticles = await hasAvailableArticleCount(
    user.id,
    space?.key as string,
    user.accounttype
  );
  if (hasArticles) {
    const article = await db.article.create({
      data: {
        ...data,
        userId: user.id,
        spaceId,
        akey: generateId(),
        slug,
      },
    });

    await incrementArticleCount(user.id, space?.key as string);

    revalidatePath("/");

    return article;
  }

  return false;
}

export async function updateArticleStatus(
  noteId: string,
  userId: string,
  state: boolean
) {
  await db.article.update({
    where: {
      id: noteId,
      userId,
    },
    data: {
      isPublic: !state,
    },
  });

  revalidatePath("/");
}

export async function updateArticle(data: Space, aKey: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const validData = createSpaceSchema.safeParse(data);

  if (!validData) throw new Error("Data not valid");

  const article = await db.article.findUnique({
    where: {
      userId: user.id,
      akey: aKey,
    },
  });

  if (!article) throw new Error("Article not found");

  const udatedArticle = await db.article.update({
    where: {
      userId: user.id,
      akey: aKey,
    },
    data: {
      ...data,
    },
  });

  revalidatePath("/");

  return udatedArticle;
}

export async function deleteArticle(
  data: DeleteType,
  key: string,
  spaceKey: string
) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const validData = createSpaceSchema.safeParse(data);

  if (!validData) throw new Error("Data not valid");

  const space = await checkSpace(spaceKey);

  const article = await db.article.findUnique({
    where: {
      userId: user.id,
      akey: key,
    },
  });

  if (!article) throw new Error("Article not found");

  const deleted = await db.article.delete({
    where: {
      userId: user.id,
      akey: key,
    },
  });

  await decrementArticleCount(user.id, space?.key as string);

  revalidatePath("/");

  return deleted;
}

export async function updateArticleBg(
  displayImage: string,
  articleId: string,
  key: string,
  userId: string
) {
  const updatedArticle = await db.article.update({
    where: {
      id: articleId,
      userId,
    },
    data: {
      displayImage,
      key,
    },
  });

  revalidatePath("/");

  return updatedArticle;
}

export async function removeArticleBg(key: string, articleId: string) {
  const user = await getCurrentUser();

  try {
    utapi.deleteFiles(key);

    const updatedArticle = await db.article.update({
      where: {
        id: articleId,
        userId: user?.id,
      },
      data: {
        displayImage: null,
        key: null,
      },
    });

    revalidatePath("/");

    return { message: "Deleted" };
  } catch (error) {
    return { message: "error" };
  }
}

export async function getUserNotes(userId: string) {
  if (!userId) return;

  const notes = await db.article.findMany({
    where: {
      userId,
    },
  });

  if (notes) return notes;

  return [];
}

export async function createNewSpace(values: Space) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const validData = createSpaceSchema.safeParse(values);

  if (!validData.success) throw new Error("Data not valid");

  const hasSpace = await hasAvailableSpaceCount(user.id, user.accounttype);

  if (hasSpace) {
    const space = await db.space.create({
      data: {
        ...values,
        userId: user.id,
        key: generateId(),
      },
    });

    await incrementCount(user.id);

    revalidatePath("/");

    return space;
  }

  return false;
}

export async function getSingleSpace(userId: string, spaceKey: string) {
  if (!userId) return;

  const space = await db.space.findUnique({
    where: {
      key: spaceKey,
      userId,
    },
  });

  return space;
}

export async function getUsersSpace(userId: string) {
  if (!userId) return;

  const spaces = await db.space.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      articles: true,
    },
  });

  return spaces;
}

export async function updateSpace(data: Space, spaceKey: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const userSpace = await db.space.findUnique({
    where: {
      key: spaceKey,
      userId: user.id,
    },
  });

  if (!userSpace) throw new Error("Space not found");

  const validData = createSpaceSchema.safeParse(data);

  if (!validData.success) throw new Error("Data not valid");

  const updatedSpace = await db.space.update({
    where: {
      key: userSpace.key,
      userId: user.id,
    },
    data: {
      ...data,
    },
  });

  revalidatePath("/");
  return updatedSpace;
}

export async function deleteSpace(data: DeleteType, key: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const userSpace = await db.space.findUnique({
    where: {
      key,
      userId: user.id,
    },
  });

  if (!userSpace) throw new Error("Space not found");

  const validData = deleteName.safeParse(data);

  if (!validData.success) throw new Error("Data not valid");

  const deleted = await db.space.delete({
    where: {
      key,
      userId: user.id,
    },
  });

  await decrementCount(user.id);

  revalidatePath("/");

  return deleted;
}

export async function getNotesPerSpace(userId: string, spaceId: string) {
  if (!userId || !spaceId) return;

  const notes = await db.article.findMany({
    where: {
      spaceId,
      userId,
    },
  });
  if (notes) return notes;

  return [];
}

export async function uploadBannerImage(file: File) {
  try {
    console.log(file);

    const response = utapi.uploadFiles(file);

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateNote(content: string, noteId: string) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const article = await db.article.findUnique({
    where: {
      userId: user.id,
      id: noteId,
    },
  });

  if (!article) throw new Error("Article not found");

  const updated = await db.article.update({
    where: {
      id: article?.id,
      userId: article.userId,
    },
    data: {
      content,
    },
  });

  return updated;
}

export async function getSpaceCount() {
  const user = await getCurrentUser();

  if (!user) return;

  const spaceCount = await db.userSpaceList.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      count: true,
    },
  });
}
