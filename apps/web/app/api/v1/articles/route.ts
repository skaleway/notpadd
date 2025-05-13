import { db, ProjectStatus } from "@workspace/db";
import { NextResponse } from "next/server";

class ContentVisibilityError extends Error {
  details: string[];
  constructor(message: string, details: string[]) {
    super(message);
    this.name = "ContentVisibilityError";
    this.details = details;
  }
}

export async function GET(req: Request) {
  try {
    const headers = req.headers;
    const spaceId = headers.get("teamId") as string;
    const teamId = headers.get("secret") as string;
    const all = headers.get("all") === "true";
    const privateOnly = headers.get("privateOnly") === "true";
    const publishOnly = headers.get("publishOnly") === "true";
    const statusHeader = headers.get("status");

    if (!spaceId || !teamId) {
      return new Response("Missing teamId or secret in headers", {
        status: 400,
      });
    }

    // Validate content visibility flags
    const validateVisibilityFlags = () => {
      const errors = [];

      if (all && privateOnly) {
        errors.push(
          "Cannot fetch both all content and private-only content simultaneously"
        );
      }

      if (privateOnly && publishOnly) {
        errors.push(
          "Cannot fetch both private-only and published-only content"
        );
      }

      if (all && publishOnly) {
        errors.push(
          "Cannot fetch both all content and published-only content simultaneously"
        );
      }

      if (errors.length > 0) {
        throw new ContentVisibilityError(
          "Invalid content visibility configuration",
          errors
        );
      }
    };

    // Run validation before any DB request
    try {
      validateVisibilityFlags();
    } catch (e) {
      if (e instanceof ContentVisibilityError) {
        return Response.json(
          {
            error: e.message,
            details: e.details,
          },
          { status: 400 }
        );
      }
      throw e;
    }

    // Validate status
    const allowedStatuses = [
      ProjectStatus.Draft,
      ProjectStatus.Published,
      ProjectStatus.Archived,
    ];
    let statusFilter: any = undefined;
    if (statusHeader) {
      const statusList = statusHeader.split(",").map((s) => s.trim());
      if (!statusList.every((s) => allowedStatuses.includes(s as any))) {
        return new Response("Invalid status value", { status: 400 });
      }
      statusFilter =
        statusList.length > 1
          ? {
              in: statusList as (typeof ProjectStatus)[keyof typeof ProjectStatus][],
            }
          : (statusList[0] as (typeof ProjectStatus)[keyof typeof ProjectStatus]);
    }

    const spaceWithArticles = await db.space.findUnique({
      where: {
        id: spaceId,
        teamId,
      },
      include: {
        articles: {
          where: statusFilter ? { status: statusFilter } : undefined,
          select: {
            title: true,
            description: true,
            slug: true,
            content: true,
            previewImage: true,
            createdAt: true,
            member: {
              select: {
                user: {
                  select: {
                    imageUrl: true,
                    name: true,
                    email: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!spaceWithArticles) {
      return new Response("Space not found", {
        status: 404,
      });
    }

    const articles = (
      spaceWithArticles.articles as Array<{
        title: string;
        description: string | null;
        slug: string;
        content: any;
        previewImage: string | null;
        createdAt: Date;
        member: {
          user: {
            imageUrl: string;
            name: string;
            email: string;
          };
        };
      }>
    ).map((article) => ({
      title: article.title,
      description: article.description,
      slug: article.slug,
      content: article.content,
      image: article.previewImage,
      createdAt: article.createdAt,
      author: article.member.user,
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
