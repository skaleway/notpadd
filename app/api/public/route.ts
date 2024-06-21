import { db } from "@/lib/db";
import { Article } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

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

    const next_notpadd_userId = headers.get("next_notpadd_userId");
    const next_notpadd_projectId = headers.get("next_notpadd_projectId");
    const get_only_private_articles = headers.get("get_only_private_articles");
    const get_only_public_articles = headers.get("get_only_public_articles");
    const get_all_articles = headers.get("get_all_articles");

    console.log({
      userId: next_notpadd_userId,
      projectId: next_notpadd_projectId,
      get_only_private_articles,
      get_only_public_articles,
    });

    if (!next_notpadd_projectId && !next_notpadd_userId) {
      return new NextResponse("You are not authorized to view this page", {
        status: 401,
      });
    }

    const doesUserExist = await db.user.findFirst({
      where: {
        userId: next_notpadd_userId as string,
      },
    });

    if (!doesUserExist) {
      return new NextResponse("You are not authorized get this data", {
        status: 401,
      });
    }

    const doesProjectExist = await db.project.findFirst({
      where: {
        id: next_notpadd_projectId as string,
      },
    });

    console.log(doesProjectExist);

    if (!doesProjectExist) {
      return new NextResponse(
        "Sorry the projectId is invalid, please create one",
        { status: 401 }
      );
    }

    if (get_all_articles === "True") {
      const blogs = await db.article.findMany({
        where: {
          userId: next_notpadd_userId as string,
          projectId: next_notpadd_projectId as string,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return new NextResponse("No articles found, please create some", {
          status: 404,
        });
      }

      console.log("articles all", articles);
      return new NextResponse(JSON.stringify(articles), { status: 200 });
    }

    if (
      get_only_private_articles === "True" &&
      get_only_public_articles === "True"
    ) {
      return new NextResponse(
        "You cannot have both get_only_private_articles and get_only_public_articles as True",
        { status: 400 }
      );
    }

    if (get_only_private_articles === "True" && get_all_articles != "True") {
      const blogs = await db.article.findMany({
        where: {
          projectId: next_notpadd_projectId as string,
          userId: doesUserExist.id,
          isPublic: false,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return new NextResponse("No articles found. please create some", {
          status: 404,
        });
      }

      return new NextResponse(JSON.stringify(articles), { status: 200 });
    }

    if (get_only_public_articles === "True" && get_all_articles != "True") {
      const blogs = await db.article.findMany({
        where: {
          projectId: next_notpadd_projectId as string,
          userId: doesUserExist.id,
          isPublic: true,
        },
      });

      const articles = await allArticles(blogs);

      if (!articles || articles.length === 0) {
        return new NextResponse("No articles found, please create some", {
          status: 404,
        });
      }

      return new NextResponse(JSON.stringify(articles), { status: 200 });
    }

    return new NextResponse(
      "You are authorized to view this page but the header data you are sending may not be properly structured.",
      { status: 400 }
    );
  } catch (error: any) {
    return new NextResponse("Internal server error", { status: 500 });
  }
}

// const pagerequestdata = {
//     getallprojects: false,
//     getallarticles: false,
//     getartcleonly: false,
//     getothersnotesonly:false,
//     getsimplenotesonly:false,
//     getblogsonly: false,

// }
