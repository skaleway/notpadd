"use server";

import { db } from "@/lib/db";

export async function createNewNote(userId: string) {
  const note = await db.note.create({
    data: {
      title: "Untitled",
      userId,
    },
  });

  return note;
}

export async function updateNote(content: string, noteId: string) {
  const updatedNote = await db.note.update({
    where: {
      id: noteId,
    },
    data: {
      content,
    },
  });

  return updatedNote;
}
