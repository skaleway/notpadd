"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createNewFeedBack(userId: string, message: string) {
  if (!userId) return;

  const feedback = await db.feedback.create({
    data: {
      userId,
      message,
    },
  });

  revalidatePath("/");

  return feedback;
}
