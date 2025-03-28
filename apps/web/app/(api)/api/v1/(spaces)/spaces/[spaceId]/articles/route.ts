import { generateId } from "@/actions/generate-id";
import { getCurrentUser } from "@/lib/current-user";
import { tryCatch } from "@/lib/try-catch";
import { db } from "@workspace/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ spaceId: string }>;
  }
) {
  try {
    const { spaceId } = await params;
    const { title, description } = await req.json();

    const { data, error } = await tryCatch(getCurrentUser());

    if (error) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!spaceId) {
      return new NextResponse("SpaceId required", { status: 401 });
    }

    const doesSpaceExist = await db.space.findUnique({
      where: {
        id: spaceId,
        team: {
          members: {
            some: {
              userId: data?.id,
            },
          },
        },
      },
      include: {
        team: {
          include: {
            members: {
              select: { id: true, userId: true },
            },
          },
        },
      },
    });

    if (!doesSpaceExist) {
      return new NextResponse("Space not found", { status: 401 });
    }

    const member = doesSpaceExist.team.members.find(
      (mem) => mem.userId === data?.id
    );

    if (!title) {
      return new NextResponse(
        "content, title and description are all required",
        {
          status: 400,
        }
      );
    }

    const slug = title.trim().split(" ").join("-");

    await db.article.create({
      data: {
        id: generateId(),
        title,
        slug,
        spaceId,
        description,
        memberId: member!.id ?? "",
      },
    });

    return new NextResponse("Article created successfully", { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ spaceId: string }>;
  }
) {
  try {
    const { spaceId } = await params;

    if (!spaceId) {
      return new NextResponse("SpaceId required", { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default limit is 10
    const page = parseInt(searchParams.get("page") || "1", 10); // Default page is 1

    if (limit <= 0 || page <= 0) {
      return new NextResponse("Invalid pagination parameters", { status: 400 });
    }

    // Calculate the offset for pagination
    const offset = (page - 1) * limit;

    // Fetch articles with pagination
    const articles = await db.article.findMany({
      where: {
        spaceId: spaceId,
      },
      skip: offset,
      take: limit,
    });

    // Count total articles for the given spaceId
    const totalArticles = await db.article.count({
      where: {
        spaceId: spaceId,
      },
    });

    // Return paginated response
    return NextResponse.json(
      {
        articles,
        pagination: {
          total: totalArticles,
          page,
          limit,
          totalPages: Math.ceil(totalArticles / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}
