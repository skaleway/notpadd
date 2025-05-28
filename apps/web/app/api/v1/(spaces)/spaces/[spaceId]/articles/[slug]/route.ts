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

    const body = await req.json()

    const article = await db.article.findUnique({
      where: {
        slug_spaceId: {
          slug,
          spaceId,
        },
      },
    })

    const newSlug = body.title.trim().split(" ").join("-").toLowerCase()

    if (!article) return NextResponse.json({ error: "Article not found" }, { status: 404 })

    const updatedArticle = await db.article.update({
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
    })
    return NextResponse.json(updatedArticle)
  } catch (error: any) {
    console.error("Error updating article: ", error)
    return NextResponse.json(
      { error: error.message || "Failed to update article" },
      { status: 500 },
    )
  }
}
