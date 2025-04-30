"use server";

import { db } from "@workspace/db";
import shortuniqueid from "short-unique-id";

export async function createInvite(teamId: string, days: number) {
  const { randomUUID } = new shortuniqueid({ length: 6 });
  const code = randomUUID();

  const validDate = new Date();
  validDate.setDate(validDate.getDate() + days);

  const invite = await db.invite.create({
    data: {
      teamId,
      code,
      validDate,
    },
  });

  return invite;
}
