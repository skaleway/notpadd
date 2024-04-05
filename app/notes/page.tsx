import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const Notes = async () => {
  const user = await getCurrentUser();

  if (!user) return redirect("/sign-in");

  const notes = await db.note.findMany({
    where: {
      userId: user.id,
    },
  });

  return <div>Notes</div>;
};

export default Notes;
