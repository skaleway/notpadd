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

    const validatedData = searchSchema.parse({
      query,
      type,
      page,
      limit,
    });

    const {
      query: searchQuery,
      type: searchType,
      page: pageNumber,
      limit: pageSize,
    } = validatedData;
    const skip = (pageNumber - 1) * pageSize;

    // Get user's team memberships
    const userMemberships = await db.member.findMany({
      where: {
        userId,
      },
      select: {
        teamId: true,
      },
    });

    const userTeamIds = userMemberships.map((membership) => membership.teamId);

    if (!isIndexBuilt) {
      await searchTrie.buildIndex();
      isIndexBuilt = true;
    }

    const allResults = searchTrie.search(searchQuery, userTeamIds);

    const filteredResults = allResults.filter(
      (result) => searchType === "all" || result.type === searchType
    );

    // Apply pagination
    const paginatedResults = filteredResults.slice(skip, skip + pageSize);

    // Group results by type
    const results = {
      spaces: paginatedResults.filter((r) => r.type === "space"),
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
        { status: 400 }
      );
    }

    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
