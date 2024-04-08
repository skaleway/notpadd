import React from "react";
import ArticleHeader from "../_components/article-header";
import BlockEditor from "@/components/block-editor";
import { getCurrentUser } from "@/lib/current-user";

const Notepage = async ({ params }: { params: { noteId: string } }) => {
  const user = await getCurrentUser();

  if (!user) return;
  return (
    <div className="flex flex-col gap-5">
      <ArticleHeader />
      <div className="py-10">
        <BlockEditor noteId={params.noteId} userId={user?.id} />
      </div>
    </div>
  );
};

export default Notepage;
