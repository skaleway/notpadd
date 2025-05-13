import { db } from "@workspace/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const headers = req.headers;
    const spaceId = headers.get("teamId") as string;
    const teamId = headers.get("secret") as string;
    const all = headers.get("all") === "true";
    const privateOnly = headers.get("privateOnly") === "true";
    const publishOnly = headers.get("publishOnly") === "true";

    console.log({ spaceId, teamId, all, privateOnly, publishOnly });

    if (!spaceId || !teamId) {
      return new Response("Missing teamId or secret in headers", {
        status: 400,
      });
    }

    const spaceWithArticles = await db.space.findUnique({
      where: {
        id: spaceId,
        teamId,
      },
      include: {
        articles: {
          select: {
            title: true,
            description: true,
            slug: true,
            content: true,
            previewImage: true,
            createdAt: true,
          },
        },
      },
    });

    if (!spaceWithArticles) {
      return new Response("Space not found", {
        status: 404,
      });
    }

    const articles = spaceWithArticles.articles.map((article) => ({
      title: article.title,
      description: article.description,
      slug: article.slug,
      content: article.content,
      image: article.previewImage,
      createdAt: article.createdAt,
    }));

    return NextResponse.json([...articles], {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error fetching articles", error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
