import { getUserNotes } from "@/actions/note";
import CreateNoteButton from "@/components/create-note-btn";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
// import { redirect } from "next/navigation";
import React from "react";

const Notes = async () => {
  const user = await getCurrentUser();

  const notes = await getUserNotes(user?.id as string);

  // console.log(notes);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <CreateNoteButton userId={user?.id!} />
    </div>
  );
};

export default Notes;
