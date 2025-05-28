import { db } from "@workspace/db"
import { NextResponse } from "next/server"
import { currentUser } from "@clerk/nextjs/server"
import { getCurrentUser } from "@/lib/current-user"

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>
  },
) {
  try {
    const { teamId } = await params
    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 })
    }

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const [members, totalCount] = await Promise.all([
      db.member.findMany({
        where: {
          teamId: teamId,
        },
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              imageUrl: true,
            },
          },
        },
        orderBy: {
          craetedAt: "desc",
        },
      }),
      db.member.count({
        where: {
          teamId: teamId,
        },
      }),
    ])

    const totalPages = Math.ceil(totalCount / limit)

    return new NextResponse(
      JSON.stringify({
        members,
        pagination: {
          page,
          limit,
          totalPages,
          totalCount,
          hasMore: page < totalPages,
        },
      }),
      { status: 200 },
    )
  } catch (error: any) {
    console.error(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>
  },
) {
  try {
    const { teamId } = await params
    const { userId } = await req.json()
    const user = await getCurrentUser()

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    })

    if (!team) {
      return new NextResponse("Team not found", { status: 404 })
    }

    if (team.creatorId !== user.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const ismemberinteam = await db.member.findFirst({
      where: {
        userId: userId,
        teamId: teamId,
      },
    })

    if (ismemberinteam) {
      return new NextResponse("User is already a member of this team", {
        status: 400,
      })
    }

    await db.member.create({
      data: {
        userId: userId,
        teamId: teamId,
      },
    })

    await db.team.update({
      where: {
        id: teamId,
      },
      data: {
        membersLifeTimeCount: {
          increment: 1,
        },
      },
    })

    return new NextResponse("member added successfully", { status: 201 })
  } catch (error: any) {
    console.error(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>
  },
) {
  try {
    const { teamId } = await params
    const { userId } = await req.json()

    const user = await getCurrentUser()
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    })

    if (!team) {
      return new NextResponse("Team not found", { status: 404 })
    }

    if (team.creatorId !== user.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const ismemberinteam = await db.member.findFirst({
      where: {
        userId: userId,
        teamId: teamId,
      },
    })

    if (!ismemberinteam) {
      return new NextResponse("User is not a member of this team", {
        status: 400,
      })
    }

    await db.member.deleteMany({
      where: {
        userId: userId,
        teamId: teamId,
      },
    })

    return new NextResponse("Member removed successfully", { status: 200 })
  } catch (error: any) {
    console.error(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ teamId: string }> }) {
  try {
    const { teamId } = await params
    const { userId } = await req.json()
    const { data } = await req.json()
    const user = await getCurrentUser()
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 })
    }
    if (!data.role) {
      return new NextResponse("Role is required", { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    })

    if (!team) {
      return new NextResponse("Team not found", { status: 404 })
    }

    if (team.creatorId !== user.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const ismemberinteam = await db.member.findFirst({
      where: {
        userId: userId,
        teamId: teamId,
      },
    })

    if (!ismemberinteam) {
      return new NextResponse("User is not a member of this team", {
        status: 400,
      })
    }

    await db.member.update({
      where: {
        id: ismemberinteam.id,
      },
      data: {
        role: data.role,
      },
    })

    return new NextResponse("Member role updated successfully", {
      status: 200,
    })
  } catch (error: any) {
    console.error(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
