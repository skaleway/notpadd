import { db } from "@workspace/db"
import { NextResponse } from "next/server"
import { AccountType } from "@workspace/db"
import { generateId } from "@/actions/generate-id"
import { getCurrentUser } from "@/lib/current-user"

export async function POST(req: Request) {
  try {
    const { title, teamId, description } = await req.json()

    const user = await getCurrentUser()

    if (!title || !teamId) {
      return new NextResponse("name, userid, teamid  are both require", {
        status: 400,
      })
    }

    if (!user) {
      return new NextResponse("Sorry user not found", { status: 404 })
    }

    const teamExist = await db.team.findUnique({
      where: {
        id: teamId,
        members: {
          some: {
            userId: user.id,
          },
        },
      },
    })

    if (!teamExist) return new NextResponse("Team not found", { status: 404 })

    if (user.accounttype === AccountType.Free) {
      const UserSpacecount = await db.space.count({
        where: {
          id: user.id,
        },
      })

      if (UserSpacecount >= 2) {
        return new NextResponse(
          "You have reached the maximum number of spaces for your free plan. please upgrad",
          { status: 402 },
        )
      }
    }

    if (user.accounttype === AccountType.Basic) {
      const UserSpacecount = await db.space.count({
        where: {
          id: user.id,
        },
      })

      if (UserSpacecount >= 10) {
        return new NextResponse(
          "You have reached the maximum number of spaces for your basic plan. please upgrad",
          { status: 402 },
        )
      }
    }

    const [space] = await Promise.all([
      db.space.create({
        data: {
          id: generateId(),
          name: title,
          description,
          teamId: teamExist.id,
          userId: user.id,
        },
      }),
      db.activity.create({
        data: {
          teamId: teamExist.id,
          type: "space_created",
          userId: user.id,
          description: `Created space ${title} for team ${teamExist.name} by ${user.name}`,
        },
      }),
    ])

    if (!space) {
      return new NextResponse("Something happened while creating note...", {
        status: 402,
      })
    }

    return NextResponse.json(space, { status: 201 })
  } catch (error: any) {
    console.error(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const Spaces = await db.space.findMany()
    if (!Spaces) return new NextResponse("Error getting spaces", { status: 404 })

    return new NextResponse(JSON.stringify(Spaces), { status: 200 })
  } catch (error: any) {
    console.log(error.message)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
