import { db } from "@/lib/db";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), { ssr: false });

const BlockEditor = async ({ noteId }: { noteId: string }) => {
  const note = await db.note.findUnique({
    where: {
      id: noteId,
    },
    select: {
      content: true,
    },
  });

  return (
    <div>
      <Editor noteId={noteId} initialContent={note?.content as string} />
    </div>
  );
};

export default BlockEditor;
