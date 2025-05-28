import { getCurrentUser } from "@/lib/current-user"
import { db, User, Team } from "@workspace/db"
import { NextResponse } from "next/server"

const include = {
  members: {
    select: {
      id: true,
      role: true,
    },
  },
}

const canDoChanges = (team: Team & { members: { id: string; role: string }[] }, user: User) => {
  return team.creatorId === user.id || team.members.some(member => member.role === "Owner")
}

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
      return NextResponse.json({ message: "TeamId is required", success: false }, { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
      include,
    })

    if (!team) {
      return NextResponse.json({ message: "Team not found", success: false }, { status: 404 })
    }

    return NextResponse.json(team, { status: 200 })
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ message: "Internal server error", success: false }, { status: 500 })
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
      return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 })
    }

    if (!teamId) {
      return NextResponse.json({ message: "TeamId is required", success: false }, { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
      include,
    })

    if (!team) {
      return NextResponse.json({ message: "Team not found", success: false }, { status: 404 })
    }

    const canDelete = canDoChanges(team, user)

    if (!canDelete) {
      return NextResponse.json(
        {
          message: "You are not authorized to delete this team",
          success: false,
        },
        { status: 401 },
      )
    }

    await db.team.delete({
      where: {
        id: teamId,
      },
    })

    return NextResponse.json(
      { message: "Team deleted successfully", success: true },
      { status: 200 },
    )
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ message: "Internal server error", success: false }, { status: 500 })
  }
}

export async function PUT(
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
      return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 })
    }

    if (!teamId) {
      return NextResponse.json({ message: "TeamId is required", success: false }, { status: 400 })
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
      include,
    })

    if (!team) {
      return NextResponse.json({ message: "Team not found", success: false }, { status: 404 })
    }

    const canUpdate = canDoChanges(team, user)

    if (!canUpdate) {
      return NextResponse.json({ message: "Unauthorized", success: false }, { status: 401 })
    }

    const body = await req.json()

    if (!body.name) {
      return NextResponse.json({ message: "Name is required", success: false }, { status: 400 })
    }

    const [newTeam] = await Promise.all([
      db.team.update({
        where: {
          id: teamId,
        },
        data: {
          name: body.name,
        },
      }),
      db.activity.create({
        data: {
          teamId,
          type: "team_updated",
          userId: user.id,
          description: `Updated team name from ${team.name} to ${body.name}`,
        },
      }),
    ])

    return NextResponse.json(
      { message: "Team updated successfully", success: true, team: newTeam },
      { status: 200 },
    )
  } catch (error: any) {
    console.error(error.message)
    return NextResponse.json({ message: "Internal server error", success: false }, { status: 500 })
  }
}
