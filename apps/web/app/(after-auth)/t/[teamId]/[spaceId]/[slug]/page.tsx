import { tryCatch } from "@/lib/try-catch";
import { Article, db } from "@workspace/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Editor from "../../../_components/editor";

type Props = {
  params: Promise<{ slug: string; spaceId: string }>;
};

async function getArticleFromParams({ params }: Props) {
  const { spaceId, slug } = await params;

  const article = await db.article.findUnique({
    where: {
      slug_spaceId: {
        slug,
        spaceId,
      },
    },
  });

  return article;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleFromParams({ params });

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description ?? "",
    openGraph: {
      title: article.title,
      description: "Nothing",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description ?? "",
      creator: "@bossadizenith",
    },
  };
}

const Aritlce = async ({ params }: Props) => {
  const { slug, spaceId } = await params;
  const { data, error } = await tryCatch(getArticleFromParams({ params }));

  if (error) return notFound();

  return (
    <div>
      <Editor article={data as Article} />
    </div>
  );
};

export default Aritlce;
