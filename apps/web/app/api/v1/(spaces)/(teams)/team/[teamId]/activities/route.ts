import { NextResponse } from "next/server"
import { db } from "@workspace/db"
import { auth } from "@clerk/nextjs/server"

export async function GET(req: Request, { params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const url = new URL(req.url)
    const page = parseInt(url.searchParams.get("page") || "1")
    const limit = parseInt(url.searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const totalCount = await db.activity.count({
      where: {
        teamId,
      },
    })

    const activities = await db.activity.findMany({
      where: {
        teamId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
          },
        },
        space: {
          select: {
            id: true,
            name: true,
          },
        },
        article: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    })

    return NextResponse.json({
      activities,
      pagination: {
        total: totalCount,
        pages: Math.ceil(totalCount / limit),
        current: page,
        limit,
      },
    })
  } catch (error) {
    console.error("[TEAM_ACTIVITIES_GET]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function POST(req: Request, { params }: { params: Promise<{ teamId: string }> }) {
  const { teamId } = await params
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { type, spaceId, articleId, description } = await req.json()

    const activity = await db.activity.create({
      data: {
        type,
        userId,
        teamId,
        spaceId,
        articleId,
        description,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            imageUrl: true,
          },
        },
        space: {
          select: {
            id: true,
            name: true,
          },
        },
        article: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    })

    return NextResponse.json(activity)
  } catch (error) {
    console.error("[TEAM_ACTIVITIES_POST]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
