import { auth } from "@clerk/nextjs/server"
import { db } from "@workspace/db"
import { NextResponse } from "next/server"

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ spaceId: string; slug: string }>
  },
): Promise<NextResponse> {
  try {
    const { slug, spaceId } = await params
    const { userId } = await auth()

    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    const body = await req.json()

    const [user, article] = await Promise.all([
      db.user.findUnique({
        where: {
          id: userId,
        },
      }),
      db.article.findUnique({
        where: {
          slug_spaceId: {
            slug,
            spaceId,
          },
        },
      }),
    ])

    const newSlug = body.title.trim().split(" ").join("-").toLowerCase()

    if (!article) return NextResponse.json({ error: "Article not found" }, { status: 404 })

    const [updatedArticle] = await Promise.all([
      db.article.update({
        where: {
          slug_spaceId: {
            slug,
            spaceId,
          },
        },
        data: {
          ...body,
          slug: newSlug,
        },
      }),
      db.activity.create({
        data: {
          teamId: spaceId,
          type: "article_updated",
          userId,
          description: `Article ${article.title} updated by ${user?.name ?? "unknown"}`,
        },
      }),
    ])
    return NextResponse.json(updatedArticle)
  } catch (error: any) {
    console.error("Error updating article: ", error)
    return NextResponse.json(
      { error: error.message || "Failed to update article" },
      { status: 500 },
    )
  }
}
