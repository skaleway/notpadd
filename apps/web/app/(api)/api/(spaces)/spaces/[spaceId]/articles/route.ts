import { db } from "@workspace/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { spaceId: string} }
) {
  try {
    const { spaceId } = params;
    const { data } = await req.json();

    if (!spaceId) {
      return new NextResponse("SpaceId required", { status: 401 });
    }

    const doesspaceExist = await db.space.findUnique({
      where: {
        id: spaceId,
      },
    });

    if (!doesspaceExist) {
      return new NextResponse("Space not found", { status: 401 });
    }

    if (!data.title) {
      return new NextResponse(
        "content, title and description are all required",
        {
          status: 400,
        }
      );
    }

    const slug = data.title.trim().split(" ").join("-");

    const createArticle = await db.article.create({
      data: {
       ...data,
        spaceId: spaceId,
        slug,
      },
    });

    return new NextResponse("Article created successfully", { status: 201 });
  } catch (error: any) {
    console.error(error.messag);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { spaceId: string; } }
) {
  try {
    const { spaceId } = params;

    if (!spaceId)
      return new NextResponse("Spaceid  required", { status: 401 });

    const GetArticles = await db.article.findMany({
      where: {
        spaceId: spaceId,
      },
    });

    if (!GetArticles)
      return new NextResponse("Sorry something happened while getting notes", {
        status: 401,
      });

    return new NextResponse(JSON.stringify(GetArticles), { status: 200 });
  } catch (error: any) {
    console.error(error.messag);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}