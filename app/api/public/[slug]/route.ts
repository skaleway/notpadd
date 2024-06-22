import { db } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { string } from "zod";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { headers } = req;
    const next_notpadd_userId = headers.get("next_notpadd_userId");
    const next_notpadd_projectId = headers.get("next_notpadd_projectId");
    const url = new URL(req.url);
    let { slug } = params;
    slug = slug.replace(/-/g, " ");
    const articleId = url.searchParams.get("id");

    if (!next_notpadd_projectId || !next_notpadd_userId) {
      return new NextResponse(
        "Sorry, you are not authorized to get this content",
        { status: 401 }
      );
    }
    if (!slug || !articleId) {
      return new NextResponse("Missing slug or id in the request", {
        status: 400,
      });
    }

    const doesUserExist = await db.user.findFirst({
      where: {
        userId: next_notpadd_userId as string,
      },
    });

    if (!doesUserExist) {
      return new NextResponse("You are not authorized to get this data", {
        status: 401,
      });
    }

    const doesProjectExist = await db.project.findFirst({
      where: {
        id: next_notpadd_projectId as string,
      },
    });

    if (!doesProjectExist) {
      return new NextResponse("You are not authorized to get this data", {
        status: 401,
      });
    }

    const Article = await db.article.findFirst({
      where: {
        id: articleId,
      },
    });

    if (!Article) {
      return new NextResponse("Article not found", { status: 404 });
    }

    const ParsArticle = {
      ...Article,
      content: JSON.parse(Article.content!),
    };

    return new NextResponse(JSON.stringify(ParsArticle), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
