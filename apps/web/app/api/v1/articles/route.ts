import { db, Prisma, ProjectStatus } from "@workspace/db";
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
  const startTime = performance.now();
  try {
    const headers = req.headers;
    const spaceId = headers.get("teamId") as string;
    const teamId = headers.get("secret") as string;
    const all = headers.get("all") === "true";
    const privateOnly = headers.get("privateOnly") === "true";
    const publishOnly = headers.get("publishOnly") === "true";
    const statusHeader = headers.get("status");
    const includeContent = headers.get("includeContent") !== "false"; // Default to true for backward compatibility

    // Pagination parameters
    const page = Math.max(1, parseInt(headers.get("page") || "1", 10));
    const limit = Math.min(
      100,
      Math.max(1, parseInt(headers.get("limit") || "20", 10))
    );

    if (!spaceId || !teamId) {
      return new Response("Missing teamId or secret in headers", {
        status: 400,
      });
    }

    // Validate space exists before proceeding
    const spaceExists = await db.space.findUnique({
      where: {
        id: spaceId,
        teamId,
      },
      select: { id: true },
    });

    if (!spaceExists) {
      return new Response("Space not found", {
        status: 404,
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

    // If publishOnly is true, force status to Published
    if (publishOnly) {
      statusFilter = ProjectStatus.Published;
    }
    // If privateOnly is true, force status to Draft
    if (privateOnly) {
      statusFilter = ProjectStatus.Draft;
    }

    // Build the query filter
    const articlesQuery = {
      where: {
        spaceId: spaceId,
        ...(statusFilter ? { status: statusFilter } : {}),
      },
      select: {
        title: true,
        description: true,
        slug: true,
        content: includeContent,
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
      orderBy: { createdAt: Prisma.SortOrder.desc },
      take: limit,
      skip: (page - 1) * limit,
    };

    // Execute query
    const articles = await db.article.findMany(articlesQuery);

    // Get total count for pagination metadata
    const totalCount = await db.article.count({
      where: articlesQuery.where,
    });

    // Transform into the expected response format
    const formattedArticles = articles.map((article) => ({
      title: article.title,
      description: article.description,
      slug: article.slug,
      content: article.content,
      image: article.previewImage,
      createdAt: article.createdAt,
      author: article.member.user,
    }));

    const endTime = performance.now();
    console.log(
      `Articles fetched in ${endTime - startTime}ms. Count: ${articles.length}, Total: ${totalCount}`
    );

    // Calculate cache TTL based on content type
    const cacheTTL = publishOnly ? 300 : 60; // Longer cache for published content

    return NextResponse.json(
      {
        articles: formattedArticles,
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `public, max-age=${cacheTTL}, stale-while-revalidate=600`,
        },
      }
    );
  } catch (error) {
    const endTime = performance.now();
    console.error(`Error fetching articles (${endTime - startTime}ms)`, error);

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
