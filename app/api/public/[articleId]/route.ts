import { decryptBase64 } from "@/actions/en-de";
import { db } from "../../../../lib/db";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { articleId: string } }
) {
  try {
    const { headers } = req;
    const userKey = headers.get("USER_KEY");
    const userSecret = headers.get("USER_SECRET");

    const userId = decryptBase64(userKey as string);
    const spaceId = decryptBase64(userSecret as string);

    const { articleId } = params;

    if (!spaceId || !userId) {
      return NextResponse.json(
        { message: "Sorry, you are not authorized to get this content" },
        { status: 401 }
      );
    }
    if (!articleId) {
      return NextResponse.json(
        { message: "Missing slug or id in the request" },
        {
          status: 400,
        }
      );
    }

    const doesUserExist = await db.user.findFirst({
      where: {
        userId: userId as string,
      },
    });

    if (!doesUserExist) {
      return NextResponse.json(
        { message: "You are not authorized to get this data" },
        {
          status: 401,
        }
      );
    }

    const doesSpaceExist = await db.space.findFirst({
      where: {
        id: spaceId as string,
      },
    });

    if (!doesSpaceExist) {
      return NextResponse.json(
        { message: "You are not authorized to get this data" },
        {
          status: 401,
        }
      );
    }

    const Article = await db.article.findFirst({
      where: {
        id: articleId,
      },
    });

    if (!Article) {
      return NextResponse.json("Article not found", { status: 404 });
    }

    const ParsArticle = {
      ...Article,
      content: JSON.parse(Article.content!),
    };

    return NextResponse.json(ParsArticle, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 500 });
  }
}
