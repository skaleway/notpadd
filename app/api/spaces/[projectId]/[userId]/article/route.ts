import { generateId } from "@/actions/generate-id";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { spaceId: string; userId: string } }
) {
  try {
    const { spaceId, userId } = params;
    const { content, title, description } = await req.json();

    if (!spaceId && !userId) {
      return new NextResponse("SpaceId and userId required", { status: 401 });
    }

    const doesspaceExist = await db.space.findUnique({
      where: {
        id: spaceId,
        userId: userId,
      },
    });

    if (!doesspaceExist) {
      return new NextResponse("Space not found", { status: 401 });
    }

    if (!content || !title || !description) {
      return new NextResponse(
        "content, title and description are all required",
        {
          status: 400,
        }
      );
    }

    const slug = title.trim().split(" ").join("-");

    const createArticle = await db.article.create({
      data: {
        content,
        description,
        title,
        userId: userId,

        spaceId: spaceId,
        akey: generateId(),
        slug,
      },
    });

    if (!createArticle)
      return new NextResponse(
        "An error un expected error occured while creating Note",
        { status: 402 }
      );

    return new NextResponse("Article created successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.messag);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { spaceId: string; userId: string } }
) {
  try {
    const { spaceId, userId } = params;

    if (!spaceId && !userId)
      return new NextResponse("Spaceid and userid required", { status: 401 });

    const GetNotes = await db.article.findMany({
      where: {
        userId: userId,
        spaceId: spaceId,
      },
    });

    if (!GetNotes)
      return new NextResponse("Sorry something happened while getting notes", {
        status: 401,
      });

    return new NextResponse(JSON.stringify(GetNotes), { status: 200 });
  } catch (error: any) {
    console.error(error.messag);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}
