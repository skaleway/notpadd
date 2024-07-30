import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { spaceId: string; userId: string; articleId: string } }
) {
  try {
    const { spaceId, userId, articleId } = params;

    if (!spaceId || (!userId && !articleId))
      return new NextResponse("articles id is required. very your url", {
        status: 400,
      });

    const Getarticle = await db.article.findFirst({
      where: {
        id: articleId,
        spaceId: spaceId,
      },
    });

    if (!Getarticle)
      return new NextResponse(
        "An unexpected error occured. Article does not exist",
        { status: 401 }
      );

    return new NextResponse(JSON.stringify(Getarticle), { status: 200 });
  } catch (error: any) {
    console.error(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { spaceId: string; userId: string; articleId: string } }
) {
  try {
    const { spaceId, userId, articleId } = params;

    const { title, content, description, type, isPublic } = await req.json();

    if (!spaceId && !userId && !articleId)
      return new NextResponse("SpaceId, userId and articleId are required", {
        status: 401,
      });

    const DoesarticleExist = await db.article.findUnique({
      where: {
        id: articleId,
        userId: userId,
        spaceId: spaceId,
      },
    });

    if (!DoesarticleExist)
      return new NextResponse("article not found", { status: 402 });

    const updatearticle = await db.article.update({
      where: {
        id: articleId,
        userId: userId,
        spaceId: spaceId,
      },
      data: {
        title: title,
        content: content,
        description: description,
        type: type,
        isPublic: isPublic,
      },
    });

    if (!updatearticle)
      return new NextResponse("An error occured whilr updating article", {
        status: 400,
      });

    return new NextResponse("article updated successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { spaceId: string; userId: string; articleId: string } }
) {
  try {
    const { spaceId, userId, articleId } = params;
    if (!spaceId && !userId && !articleId)
      return new NextResponse("SpaceId, userid and articleId are required", {
        status: 401,
      });

    const DoesarticleExist = await db.article.findUnique({
      where: {
        id: articleId,
        userId: userId,
        spaceId: spaceId,
      },
    });

    if (!DoesarticleExist)
      return new NextResponse("article Not found...", { status: 404 });

    const deletearticle = await db.article.delete({
      where: {
        id: articleId,
        userId: userId,
        spaceId: spaceId,
      },
    });

    if (!deletearticle)
      return new NextResponse("An error occured while deleting article", {
        status: 400,
      });

    return new NextResponse("article deleted successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);

    return new NextResponse("Internal Server error", { status: 500 });
  }
}
