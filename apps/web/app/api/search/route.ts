import { NextResponse } from "next/server";
import { db } from "@workspace/db";
import { z } from "zod";
import { searchTrie } from "@/lib/trie";
import { auth } from "@clerk/nextjs/server";

const searchSchema = z.object({
  query: z.string().min(1).max(100),
  type: z
    .enum(["all", "spaces", "articles", "members"])
    .optional()
    .default("all"),
  page: z.coerce.number().min(1).optional().default(1),
  limit: z.coerce.number().min(1).max(50).optional().default(10),
  teamId: z.string().min(1),
});

// Initialize the Trie index
let isIndexBuilt = false;

export async function GET(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const type = searchParams.get("type") as
      | "all"
      | "spaces"
      | "articles"
      | "members"
      | null;
    const page = searchParams.get("page");
    const limit = searchParams.get("limit");
    const teamId = searchParams.get("teamId");

    const validatedData = searchSchema.parse({
      query,
      type,
      page,
      limit,
      teamId,
    });

    const {
      query: searchQuery,
      type: searchType,
      page: pageNumber,
      limit: pageSize,
      teamId: validatedTeamId,
    } = validatedData;
    const skip = (pageNumber - 1) * pageSize;

    // Verify user is a member of the team
    const membership = await db.member.findFirst({
      where: {
        userId,
        teamId: validatedTeamId,
      },
    });

    if (!membership) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!isIndexBuilt) {
      await searchTrie.buildIndex();
      isIndexBuilt = true;
    }

    const allResults = searchTrie.search(searchQuery, [validatedTeamId]);

    const filteredResults = allResults.filter(
      (result) => searchType === "all" || result.type === searchType,
    );

    // Apply pagination
    const paginatedResults = filteredResults.slice(skip, skip + pageSize);

    // Group results by type
    const results = {
      spaces: await Promise.all(
        paginatedResults
          .filter((r) => r.type === "space")
          .map(async (space) => {
            const articleCount = await db.article.count({
              where: {
                spaceId: space.id,
              },
            });
            return {
              ...space,
              articleCount,
            };
          }),
      ),
      articles: paginatedResults.filter((r) => r.type === "article"),
      members: paginatedResults.filter((r) => r.type === "member"),
    };

    return NextResponse.json({
      data: results,
      pagination: {
        total: filteredResults.length,
        page: pageNumber,
        limit: pageSize,
        totalPages: Math.ceil(filteredResults.length / pageSize),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid search parameters", details: error.errors },
        { status: 400 },
      );
    }

    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
