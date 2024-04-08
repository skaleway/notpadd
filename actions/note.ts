"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createNewNote(
  userId: string,
  projectId: string,
  title?: string
) {
  const note = await db.note.create({
    data: {
      title: title ? title : "Untitled",
      userId,
      projectId,
    },
  });

  return note;
}

export async function updateNote(
  content: string,
  noteId: string,
  userId?: string
) {
  const updatedNote = await db.note.update({
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

  const notes = await db.note.findMany({
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
  });

  if (projects) return projects;

  return [];
}

export async function getNotesPerProject(userId: string, projectId: string) {
  if (!userId || !projectId) return;

  const notes = await db.note.findMany({
    where: {
      projectId,
      userId,
    },
  });

  if (notes) return notes;

  return [];
}
