import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { spaceId: string; userId: string } }
) {
  try {
    const { spaceId, userId } = params;
    const { title, description } = await req.json();

    if (!spaceId) return new NextResponse("Space not found", { status: 400 });

    const UpdateSpace = await db.space.update({
      where: {
        id: spaceId,
        userId: userId,
      },
      data: {
        title: title,
        description: description,
      },
    });

    if (!UpdateSpace)
      return new NextResponse("Something happened while updating projce", {
        status: 403,
      });
    return new NextResponse("Space update sucessfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { spaceId: string; userId: string } }
) {
  try {
    const { spaceId, userId } = params;

    if (!spaceId) return new NextResponse("space id required");

    const deletespace = await db.space.delete({
      where: {
        id: spaceId,
        userId: userId,
      },
    });

    if (!deletespace)
      return new NextResponse("An error occured while deleting space", {
        status: 400,
      });

    return new NextResponse("Space Deleted Successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;
    if (!userId)
      return new NextResponse("spaceid and userid are required", {
        status: 401,
      });
    const GetAllUserSpaces = await db.space.findMany({
      where: {
        userId: userId,
      },
    });

    if (!GetAllUserSpaces)
      return new NextResponse(
        "An unxepectd issue appeard qhile getting the spaces",
        { status: 402 }
      );

    return new NextResponse(JSON.stringify(GetAllUserSpaces), {
      status: 200,
    });
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
