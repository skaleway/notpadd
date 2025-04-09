import { getCurrentUser } from "@/lib/current-user";
import { tryCatch } from "@/lib/try-catch";
import { db } from "@workspace/db";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const spaceId = req.headers.get("spaceId") as string;
    const { data: user, error } = await tryCatch(getCurrentUser());

    if (error) {
      return new NextResponse("User not found", { status: 404 });
    }

    const space = await db.space.findUnique({
      where: {
        id: spaceId,
      },
      include: {
        User: true,
      },
    });

    if (!space) {
      return new NextResponse("Space not found", { status: 404 });
    }

    if (
      !space.ghFinedGrainedToken ||
      !space.ghUsername ||
      !space.ghRepository
    ) {
      return new NextResponse("Space not configured", { status: 404 });
    }

    const GITHUB_API_URL = `https://api.github.com/repos/${space.ghUsername}/${space.ghRepository}/contents/do_not_edit_this_file.md`;

    const { data: currentFileData } = await axios.get(GITHUB_API_URL, {
      headers: {
        Authorization: `Bearer ${space.ghFinedGrainedToken}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    const currentSha = currentFileData.sha;

    console.log("currentSha here:", currentSha);

    const do_not_edit_this_file_content = Buffer.from(
      currentFileData.content
    ).toString("base64");

    const date = new Date().toISOString();
    do_not_edit_this_file_content;
    const commitMessage = `Automated commit: ${date} by ${user?.name}`;

    const commitPayload = {
      message: commitMessage,
      content: do_not_edit_this_file_content,
      sha: currentFileData.sha,
      branch: "main",
    };

    const res = await axios.put(GITHUB_API_URL, commitPayload, {
      headers: {
        Authorization: `Bearer ${space.ghFinedGrainedToken}`,
      },
    });

    console.log("res here:", res);

    return new NextResponse("File updated and pushed to GitHub successfully", {
      status: 200,
    });
  } catch (error: any) {
    console.error("Error committing and pushing to GitHub:", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
