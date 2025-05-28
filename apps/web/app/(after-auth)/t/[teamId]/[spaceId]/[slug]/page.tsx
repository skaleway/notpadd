import { tryCatch } from "@/lib/try-catch"
import { Article, db } from "@workspace/db"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import React from "react"
import Editor from "../../../_components/editor"
import ArticleMetadata from "../../../_components/article-metadata"
import { Button } from "@workspace/ui/components/button"
import { Pen } from "lucide-react"

type Props = {
  params: Promise<{ slug: string; spaceId: string }>
}

async function getArticleFromParams({ params }: Props) {
  const { spaceId, slug } = await params

  const article = await db.article.findUnique({
    where: {
      slug_spaceId: {
        slug,
        spaceId,
      },
    },
  })

  return article
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleFromParams({ params })

  if (!article) {
    return {}
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
  }
}

const Aritlce = async ({ params }: Props) => {
  const { data, error } = await tryCatch(getArticleFromParams({ params }))

  if (error) return notFound()
  return (
    <div className="flex flex-col gap-4">
      <div className="h-16 items-center flex justify-end">
        <ArticleMetadata article={data as Article}>
          <Button className="w-fit">
            <Pen className="mr-2 size-4" /> Metadata
          </Button>
        </ArticleMetadata>
      </div>
      <Editor article={data as Article} />
    </div>
  )
}

export default Aritlce
