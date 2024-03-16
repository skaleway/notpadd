import BlockEditor from "@/components/block-editor";
import { db } from "@/lib/db";
import React from "react";

const Note = async ({ params }: { params: { noteId: string } }) => {
  const currentNote = await db.note.findUnique({
    where: {
      id: params.noteId,
    },
  });

  // console.log(currentNote);
  let content = "";

  if (!currentNote) return <div>Note note found</div>;


  return (
    <div className="py-10">
      <BlockEditor noteId={params.noteId} />
    </div>
  );
};

export default Note;
