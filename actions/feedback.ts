"use server";

import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { feedbackSchema, feedbackSchemaType } from "@/lib/validations";
import { revalidatePath } from "next/cache";

export async function createNewFeedBack(data: feedbackSchemaType) {
  const user = await getCurrentUser();

  if (!user) throw new Error("Unauthorized");

  const validData = feedbackSchema.safeParse(data);

  if (!validData.success) throw new Error("Data not valid");

  const feedback = await db.feedback.create({
    data: {
      userId: user.id,
      ...data,
    },
  });

  revalidatePath("/");

  return feedback;
}
