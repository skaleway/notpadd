import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;
    const { title, description, userId } = await req.json();

    if (!projectId)
      return new NextResponse("Project not found", { status: 400 });

    const UpdateProject = await db.project.update({
      where: {
        id: projectId,
        userId: userId,
      },
      data: {
        title: title,
        description: description,
      },
    });

    if (!UpdateProject)
      return new NextResponse("Something happened while updating projce", {
        status: 403,
      });
    return new NextResponse("Project update sucessfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    const { projectId } = params;
    if (!projectId)
      return new NextResponse("ProjectId not found. please try again later");

    const GetProject = await db.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        articles: true,
      },
    });

    if (!GetProject)
      return new NextResponse("Project not found", { status: 400 });

    return new NextResponse(JSON.stringify(GetProject), { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
