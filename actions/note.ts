"use server";

import { db } from "@/lib/db";
import { utapi } from "@/lib/uploadthing-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewNote(
  userId: string,
  projectId: string,
  title?: string,
  description?: string
) {
  const article = await db.article.create({
    data: {
      title: title ? title : "Untitled",
      userId,
      projectId,
      description,
    },
  });

  redirect(`/manage/projects/${projectId}/${article.id}`);

  return article;
}

export async function updateArticleStatus(noteId: string, userId: string) {
  const updateStatus = await db.article.update({
    where: {
      id: noteId,
      userId,
    },
    data: {
      isPublic: true ? false : true,
    },
  });
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

  const project = await db.project.create({
    data: {
      title,
      userId,
      description,
    },
  });

  revalidatePath("/");

  return project;
}

export async function getSingleProject(userId: string, projectId?: string) {
  if (!userId) return;

  const project = await db.project.findUnique({
    where: {
      id: projectId,
      userId,
    },
  });

  return project;
}

export async function getUsersProject(userId: string) {
  if (!userId) return;

  const projects = await db.project.findMany({
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

export async function getNotesPerProject(userId: string, projectId: string) {
  if (!userId || !projectId) return;

  const notes = await db.article.findMany({
    where: {
      projectId,
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
