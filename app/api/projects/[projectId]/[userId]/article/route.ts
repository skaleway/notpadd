import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { projectId: string; userId: string } }
) {
  try {
    const { projectId, userId } = params;
    const { content, title, description } = await req.json();

    if (!projectId && !userId) {
      return new NextResponse("ProjectId and userId required", { status: 401 });
    }

    const doesprojectExist = await db.space.findUnique({
      where: {
        id: projectId,
        userId: userId,
      },
    });

    if (!doesprojectExist) {
      return new NextResponse("Project not found", { status: 401 });
    }

    if (!content || !title || !description) {
      return new NextResponse(
        "content, title and description are all required",
        {
          status: 400,
        }
      );
    }

    const createArticle = await db.article.create({
      data: {
        content,
        description,
        title,
        userId: userId,
        projectId: projectId,
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
  { params }: { params: { projectId: string; userId: string } }
) {
  try {
    const { projectId, userId } = params;

    if (!projectId && !userId)
      return new NextResponse("Projectid and userid required", { status: 401 });

    const GetNotes = await db.article.findMany({
      where: {
        userId: userId,
        projectId: projectId,
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
