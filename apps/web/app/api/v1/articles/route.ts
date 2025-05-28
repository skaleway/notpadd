import { db, Prisma, ProjectStatus } from "@workspace/db";
import { NextResponse } from "next/server";

/**
 * Custom error class for content visibility validation errors
 */
class ContentVisibilityError extends Error {
  details: string[];
  constructor(message: string, details: string[]) {
    super(message);
    this.name = "ContentVisibilityError";
    this.details = details;
  }
}

/**
 * Type for the formatted article response
 */
type FormattedArticle = {
  title: string;
  description: string | null;
  slug: string;
  content: any;
  createdAt: Date;
  author: {
    imageUrl: string | null;
    name: string | null;
    email: string;
  };
  image: {
    url: string | null;
    blur: string | null;
  };
};

/**
 * Type for the response data structure
 */
type ArticlesResponse = {
  articles: FormattedArticle[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

/**
 * Type for status filter
 */
type StatusFilter =
  | (typeof ProjectStatus)[keyof typeof ProjectStatus]
  | { in: (typeof ProjectStatus)[keyof typeof ProjectStatus][] };

/**
 * Parse and validate visibility flags from request headers
 */
function parseVisibilityFlags(headers: Headers): {
  all: boolean;
  privateOnly: boolean;
  publishOnly: boolean;
} {
  const all = headers.get("all") === "true";
  const privateOnly = headers.get("privateOnly") === "true";
  const publishOnly = headers.get("publishOnly") === "true";

  return { all, privateOnly, publishOnly };
}

/**
 * GET handler for fetching articles from a space
 */
export async function GET(req: Request): Promise<Response> {
  const startTime: number = performance.now();
  try {
    const headers: Headers = req.headers;
    const spaceId: string | null = headers.get("teamId");
    const teamId: string | null = headers.get("secret");

    // Parse visibility flags
    const { all, privateOnly, publishOnly } = parseVisibilityFlags(headers);

    const statusHeader: string | null = headers.get("status");
    const includeContent: boolean = headers.get("includeContent") !== "false"; // Default to true for backward compatibility

    // Pagination parameters
    const page: number = Math.max(1, parseInt(headers.get("page") || "1", 10));
    const limit: number = Math.min(
      100,
      Math.max(1, parseInt(headers.get("limit") || "20", 10)),
    );

    if (!spaceId || !teamId) {
      return new Response("Missing teamId or secret in headers", {
        status: 400,
      });
    }

    // Validate content visibility flags - this MUST happen before any database operations
    const validateVisibilityFlags = (): void => {
      const errors: string[] = [];

      if (all && privateOnly) {
        errors.push(
          "Cannot fetch both all content and private-only content simultaneously",
        );
      }

      if (privateOnly && publishOnly) {
        errors.push(
          "Cannot fetch both private-only and published-only content",
        );
      }

      if (all && publishOnly) {
        errors.push(
          "Cannot fetch both all content and published-only content simultaneously",
        );
      }

      if (errors.length > 0) {
        throw new ContentVisibilityError(
          "Invalid content visibility configuration",
          errors,
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
          { status: 400 },
        );
      }
      throw e;
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

    // Validate status
    const allowedStatuses: (typeof ProjectStatus)[keyof typeof ProjectStatus][] =
      [ProjectStatus.Draft, ProjectStatus.Published, ProjectStatus.Archived];

    let statusFilter: StatusFilter | undefined = undefined;
    if (statusHeader) {
      const statusList: string[] = statusHeader.split(",").map((s) => s.trim());
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

    // Apply status filter based on visibility flags
    // If publishOnly is true, force status to Published
    if (publishOnly) {
      statusFilter = ProjectStatus.Published;
    }
    // If privateOnly is true, force status to Draft
    else if (privateOnly) {
      statusFilter = ProjectStatus.Draft;
    }
    // If "all" is true, no status filter is applied (undefined)
    else if (all) {
      // Keep statusFilter as undefined to fetch all statuses
    }
    // DEFAULT CASE: If no visibility flag is specified, default to Published only
    else if (!statusHeader) {
      // No explicit status and no visibility flags means default to published only
      statusFilter = ProjectStatus.Published;
    }
    // If statusHeader is specified but no visibility flags, use the provided statusHeader

    // Build the query filter
    const whereClause: Prisma.ArticleWhereInput = {
      spaceId: spaceId,
      ...(statusFilter ? { status: statusFilter } : {}),
    };

    // Define the query with proper types
    const articlesQuery = {
      where: whereClause,
      select: {
        title: true,
        description: true,
        slug: true,
        content: includeContent,
        previewImage: true,
        previewBlur: true,
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
    const totalCount: number = await db.article.count({
      where: whereClause,
    });

    // Transform into the expected response format
    const formattedArticles: FormattedArticle[] = articles.map((article) => ({
      title: article.title,
      description: article.description,
      slug: article.slug,
      content: article.content,
      createdAt: article.createdAt,
      author: article.member.user,
      image: {
        url: article.previewImage,
        blur: article.previewBlur,
      },
    }));

    const endTime: number = performance.now();
    console.log(
      `Articles fetched in ${Math.round(endTime - startTime)}ms. Count: ${articles.length}, Total: ${totalCount}`,
    );

    // Calculate cache TTL based on content type - use longer TTL for published content
    // If we're showing "all" content or mixed content, use shorter TTL
    const isPublishedOnly = statusFilter === ProjectStatus.Published;
    const cacheTTL: number = isPublishedOnly ? 300 : 60;

    const responseData: ArticlesResponse = {
      articles: formattedArticles,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    };

    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, max-age=${cacheTTL}, stale-while-revalidate=600`,
      },
    });
  } catch (error) {
    const endTime: number = performance.now();
    console.error(
      `Error fetching articles (${Math.round(endTime - startTime)}ms)`,
      error,
    );

    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
