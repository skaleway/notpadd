import { getCurrentUser } from "@/lib/current-user";
import { db } from "@workspace/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>;
  },
) {
  try {
    const { teamId } = await params;
    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 });
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
      include: {
        members: true,
      },
    });

    if (!team) {
      return new NextResponse("Team not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(team), { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>;
  },
) {
  try {
    const { teamId } = await params;
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 });
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    });

    if (!team) {
      return new NextResponse("Team not found", { status: 404 });
    }

    if (team.creatorId !== user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.team.delete({
      where: {
        id: teamId,
      },
    });

    return new NextResponse("Team deleted successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ teamId: string }>;
  },
) {
  try {
    const { teamId } = await params;
    const user = await getCurrentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!teamId) {
      return new NextResponse("TeamId is required", { status: 400 });
    }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    });

    if (!team) {
      return new NextResponse("Team not found", { status: 404 });
    }

    if (team.creatorId !== user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { data } = await req.json();

    if (!data.name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    await db.team.update({
      where: {
        id: teamId,
      },
      data: {
        name: data.name,
      },
    });

    return new NextResponse("Team updated successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
