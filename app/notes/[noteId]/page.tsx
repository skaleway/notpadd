import BlockEditor from "@/components/block-editor";
import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs";
import React from "react";

const Note = async ({ params }: { params: { noteId: string } }) => {
  const currentNote = await db.note.findUnique({
    where: {
      id: params.noteId,
    },
  });

  // const { userId } = auth();

  if (!currentNote) return <div>Note note found</div>;

  // console.log(userId);

  return (
    <div className="py-10">
      <BlockEditor noteId={params.noteId} />
    </div>
  );
};

export default Note;
