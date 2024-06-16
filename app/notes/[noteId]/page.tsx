import { db } from "@/lib/db";
import React from "react";

const Note = async ({ params }: { params: { noteId: string } }) => {
  const currentArticle = await db.article.findUnique({
    where: {
      id: params.noteId,
    },
  });

  if (!currentArticle) return <div>Note note found</div>;

  return <div className="py-10"></div>;
};

export default Note;
