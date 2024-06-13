import { db } from "@/lib/db";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), { ssr: false });

const BlockEditor = async ({
  noteId,
  userId,
}: {
  noteId: string;
  userId: string;
}) => {
  const note = await db.article.findUnique({
    where: {
      id: noteId,
    },
    select: {
      content: true,
    },
  });

  if (!note) return <div>Note note found</div>;

  return (
    <div>
      <Editor
        noteId={noteId}
        initialContent={note.content as string}
        userId={userId}
      />
    </div>
  );
};

export default BlockEditor;
