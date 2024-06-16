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
  const article = await db.article.findUnique({
    where: {
      id: noteId,
    },
    select: {
      content: true,
    },
  });

  if (!article) return <div>Note note found</div>;

  return (
    <div>
      <Editor
        noteId={noteId}
        initialContent={article.content as string}
        userId={userId}
      />
    </div>
  );
};

export default BlockEditor;
