import React from "react";
import ArticleHeader from "../_components/article-header";
import BlockEditor from "@/components/block-editor";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

const Notepage = async ({ params }: { params: { articleKey: string } }) => {
  const user = await getCurrentUser();

  const article = await db.article.findUnique({
    where: {
      akey: params.articleKey,
    },
  });

  if (!user) return;

  if (!article) return <div>Note note found</div>;

  return (
    <div className="flex flex-col gap-5">
      <ArticleHeader article={article!} userId={user.id} />

      <BlockEditor article={article} />
    </div>
  );
};

export default Notepage;
