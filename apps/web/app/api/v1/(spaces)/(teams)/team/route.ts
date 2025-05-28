import { NextResponse } from "next/server"
import { AccountType, db, MemberRole } from "@workspace/db"
import { getCurrentUser } from "@/lib/current-user"

export async function POST(req: Request) {
  try {
    const { name } = await req.json()
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    if (!name) {
      return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 })
    }

    const getuserteams = await db.member.findMany({
      where: {
        userId: user.id,
        role: MemberRole.Owner,
      },
    })

    if (getuserteams.length === 1 && user.accounttype === AccountType.Free) {
      return NextResponse.json(
        {
          success: false,
          message: "You have reached the maximum number of teams allowed for a free account",
        },
        { status: 403 },
      )
    }

    if (getuserteams.length === 3 && user.accounttype === AccountType.Basic) {
      return NextResponse.json(
        {
          success: false,
          message: "You have reached the maximum number of teams allowed for a Basic Account",
        },
        { status: 403 },
      )
    }

    const team = await db.team.create({
      data: {
        name,
        creatorId: user.id,
        members: {
          create: [
            {
              userId: user.id,
              role: MemberRole.Owner,
            },
          ],
        },
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Team created successfully",
        team,
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
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
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    if (!teamId) {
      return NextResponse.json({ success: false, message: "TeamId is required" }, { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    })

    if (!team) {
      return NextResponse.json({ success: false, message: "Team not found" }, { status: 404 })
    }

    if (team.creatorId !== user.id) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    await db.team.delete({
      where: {
        id: teamId,
      },
    })

    return NextResponse.json(
      { success: true, message: "Team deleted successfully" },
      { status: 200 },
    )
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    const teams = await db.team.findMany({
      where: {
        OR: [{ creatorId: user.id }, { members: { some: { userId: user.id } } }],
      },
      include: {
        members: true,
      },
    })

    return NextResponse.json(
      { success: true, message: "Teams fetched successfully", teams },
      { status: 200 },
    )
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
