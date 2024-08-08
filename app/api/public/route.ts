import { decryptBase64 } from "@/actions/en-de";
import { db } from "@/lib/db";
import { Article } from "@prisma/client";

import { NextResponse } from "next/server";

async function allArticles(articles: Article[]) {
  const newArticles = articles.map((article) => {
    return {
      ...article,
      content: JSON.parse(article.content!),
    };
  });

  return newArticles;
}

export async function GET(req: Request) {
  try {
    const { headers } = req;

    const next_notpadd_userId = headers.get("USER_KEY");
    const next_notpadd_spaceId = headers.get("USER_SECRET");
    const get_only_private_articles = headers.get("private_only");
    const get_only_public_articles = headers.get("public_only");
    const get_all_articles = headers.get("all");

    // console.log(next_notpadd_userId, next_notpadd_spaceId);

    const userId = decryptBase64(next_notpadd_userId as string);
    const spaceId = decryptBase64(next_notpadd_spaceId as string);

    // console.log({ userId, spaceId });

    if (!userId && !spaceId) {
      return NextResponse.json(
        { message: "You are not authorized to view this page" },
        {
          status: 401,
        }
      );
    }

    const doesUserExist = await db.user.findUnique({
      where: {
        userId,
      },
    });

    //console.log(doesUserExist);

    if (!doesUserExist) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 401,
        }
      );
    }

    const doesSpaceExist = await db.space.findUnique({
      where: {
        id: spaceId,
        userId: doesUserExist.id,
      },
    });

    //console.log(doesSpaceExist);

    if (!doesSpaceExist) {
      return NextResponse.json(
        { message: "Sorry space not found create new one" },
        { status: 401 }
      );
    }

    // console.log({ userId, spaceId });

    if (get_all_articles === "true") {
      const blogs = await db.article.findMany({
        where: {
          userId: doesUserExist.id,
          spaceId,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return NextResponse.json(
          { message: "No articles found, please create some" },
          {
            status: 404,
          }
        );
      }

      //  console.log("articles all", articles);
      return NextResponse.json(articles, { status: 200 });
    }

    if (
      get_only_private_articles === "true" &&
      get_only_public_articles === "true"
    ) {
      return NextResponse.json(
        {
          message:
            "You can't get both public and private as true use get all articles rather",
        },
        { status: 400 }
      );
    }

    if (get_only_private_articles === "true" && get_all_articles != "true") {
      const blogs = await db.article.findMany({
        where: {
          spaceId,
          userId: doesUserExist.id,
          isPublic: false,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return NextResponse.json(
          { message: "No articles found. please create some" },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(articles, { status: 200 });
    }

    if (get_only_public_articles === "true" && get_all_articles != "true") {
      const blogs = await db.article.findMany({
        where: {
          spaceId,
          userId: doesUserExist.id,
          isPublic: true,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return NextResponse.json([], {
          status: 200,
        });
      }

      return NextResponse.json(articles, { status: 200 });
    }

    return NextResponse.json(
      {
        message:
          "You are authorized to view this page but you have some missing headers.",
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
