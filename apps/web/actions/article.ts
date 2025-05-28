"use server"

import { getCurrentUser } from "@/lib/current-user"
import { tryCatch } from "@/lib/try-catch"
import { db } from "@workspace/db"

import type { Article } from "@workspace/db"

export async function updateArticle({
  spaceId,
  content,
  slug,
}: {
  spaceId: string
  content: string
  slug: string
}): Promise<Article> {
  const { data, error } = await tryCatch(getCurrentUser())

  if (error) throw new Error("Unauthorized")

  const article = await db.article.findUnique({
    where: {
      slug_spaceId: {
        slug,
        spaceId,
      },
    },
  })
  if (!article) throw new Error("Article not found")

  const updated = await db.article.update({
    where: {
      slug_spaceId: {
        slug,
        spaceId,
      },
    },
    data: {
      content,
    },
  })

  return updated
}

export async function publishArticle({
  spaceId,
  slug,
}: {
  spaceId: string
  slug: string
}): Promise<Article> {
  const { data, error } = await tryCatch(getCurrentUser())

  if (error) throw new Error("Unauthorized")

  console.log("publishArticle", spaceId, slug)

  const article = await db.article.findUnique({
    where: {
      slug_spaceId: {
        slug,
        spaceId,
      },
    },
    include: {
      space: {
        select: {
          teamId: true,
          name: true,
        },
      },
    },
  })
  if (!article) throw new Error("Article not found")

  const [updated] = await Promise.all([
    db.article.update({
      where: { slug_spaceId: { slug, spaceId } },
      data: {
        status: article.status === "Draft" ? "Published" : "Draft",
      },
    }),
    db.activity.create({
      data: {
        teamId: article.space.teamId,
        type: article.status === "Draft" ? "article_published" : "article_unpublished",
        userId: data?.id!,
        description: `Updated article ${article.title} for space ${article.space.name} to ${article.status}`,
      },
    }),
  ])

  return updated
}

export async function deleteArticle({
  spaceId,
  slug,
}: {
  spaceId: string
  slug: string
}): Promise<Article> {
  const { data, error } = await tryCatch(getCurrentUser())

  if (error) throw new Error("Unauthorized")

  const article = await db.article.findUnique({
    where: { slug_spaceId: { slug, spaceId } },
    include: {
      space: {
        select: {
          teamId: true,
          name: true,
        },
      },
    },
  })
  if (!article) throw new Error("Article not found")

  const [deleted] = await Promise.all([
    db.article.delete({
      where: { slug_spaceId: { slug, spaceId } },
    }),
    db.activity.create({
      data: {
        teamId: article.space.teamId,
        type: "article_deleted",
        userId: data?.id!,
        description: `Deleted article ${article.title} for space ${article.space.name}`,
      },
    }),
  ])
  return deleted
}
