import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { AccountType } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { title, description, userId } = await req.json();

    if (!title || !description || !userId) {
      return new NextResponse("title and description are both require", {
        status: 400,
      });
    }

    // const User = await currentUser()
    // if(!User){
    //     return new NextResponse("UnAuthorized", {status:401})
    // }
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return new NextResponse("Sorry user not found", { status: 404 });
    }

    if (user.accounttype === AccountType.Free) {
      const UserProjectcount = await db.space.count({
        where: {
          userId: user.id,
        },
      });

      if (UserProjectcount >= 2) {
        return new NextResponse(
          "You have reached the maximum number of projects for your free plan. please upgrad",
          { status: 402 }
        );
      }
    }

    if (user.accounttype === AccountType.Basic) {
      const UserProjectcount = await db.space.count({
        where: {
          userId: user.id,
        },
      });

      if (UserProjectcount >= 10) {
        return new NextResponse(
          "You have reached the maximum number of projects for your basic plan. please upgrad",
          { status: 402 }
        );
      }
    }

    const Project = await db.space.create({
      data: {
        title,
        description,
        userId: user.id,
      },
    });

    if (!Project) {
      return new NextResponse("Something happened while creating note...", {
        status: 402,
      });
    }
    return new NextResponse(JSON.stringify(Project), { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const Projects = await db.space.findMany();
    if (!Projects)
      return new NextResponse("Error getting projects", { status: 404 });

    return new NextResponse(JSON.stringify(Projects), { status: 200 });
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
