"use server";

import { ActivityType, db } from "@workspace/db";
import shortuniqueid from "short-unique-id";
import { auth } from "@clerk/nextjs/server";

export async function createInvite(teamId: string, days: number) {
  const { randomUUID } = new shortuniqueid({ length: 20 });
  const code = randomUUID();
  const { userId } = await auth()
  const validDate = new Date();
  validDate.setDate(validDate.getDate() + days);

  const [invite] = await Promise.all([
    db.invite.create({
    data: {
      teamId,
      code,
      validDate,
    },
  }),

  db.activity.create({
    data: {
      teamId,
      type: "invite_created",
      userId: userId!,
    },
  })

  ])





  return invite;
}
