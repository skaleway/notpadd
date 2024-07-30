"use server";

import { utapi } from "@/app/server/uploadthing";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateId } from "./generate-id";

export async function createNewNote(
  userId: string,
  spaceId: string,
  title?: string,
  description?: string
) {
  const article = await db.article.create({
    data: {
      title: title ? title : "Untitled",
      userId,
      spaceId,
      description,
      akey: generateId(),
    },
  });

  redirect(`/manage/spaces/${spaceId}/${article.id}`);

  return article;
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

export async function updateNote(
  content: string,
  noteId: string,
  userId: string
) {
  const updatedNote = await db.article.update({
    where: {
      id: noteId,
      userId,
    },
    data: {
      content,
    },
  });

  return updatedNote;
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

    console.log("done");

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

export async function createNewProject(
  userId: string,
  title: string,
  description?: string
) {
  if (!userId) return;

  const project = await db.space.create({
    data: {
      title,
      userId,
      description,
      key: generateId(),
    },
  });

  revalidatePath("/");

  return project;
}

export async function getSingleProject(userId: string, projectId?: string) {
  if (!userId) return;

  const project = await db.space.findUnique({
    where: {
      id: projectId,
      userId,
    },
  });

  return project;
}

export async function getUsersProject(userId: string) {
  if (!userId) return;

  const projects = await db.space.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (projects) return projects;

  return [];
}

export async function getNotesPerProject(userId: string, spaceId: string) {
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
