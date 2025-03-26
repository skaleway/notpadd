import { NextResponse } from "next/server";
import { db, MemberRole } from "@workspace/db";
import { getCurrentUser } from "@/lib/current-user";

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
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
    });

    return NextResponse.json(
      { message: "Team created successfully", team },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const teams = await db.team.findMany({
      where: {
        OR: [
          { creatorId: user.id },
          { members: { some: { userId: user.id } } },
        ],
      },
      include: {
        members: true,
      },
    });

    return new NextResponse(JSON.stringify(teams), { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
