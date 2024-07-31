import { db } from "@/lib/db";
import { Article } from "@prisma/client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), { ssr: false });

const BlockEditor = async ({ article }: { article: Article }) => {
  return (
    <div>
      <Editor
        noteId={article.id}
        initialContent={article.content as string}
        userId={article.userId}
      />
    </div>
  );
};

export default BlockEditor;
