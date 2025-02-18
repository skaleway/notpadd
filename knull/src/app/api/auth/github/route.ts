import { GitHubService } from "@/server/auth/github";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const state = nanoid();
    const githubService = GitHubService.getInstance();
    const authUrl = await githubService.getAuthorizationUrl(state);

    // Store state in cookie for verification
    const response = Response.redirect(authUrl);
    response.headers.set(
      "Set-Cookie",
      `github_oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=300`
    );

    return NextResponse.json({ message: "nothing just cooking..." });
  } catch (error) {
    console.error("GitHub auth error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
