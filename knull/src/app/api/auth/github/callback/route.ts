import { auth } from "@clerk/nextjs/server";
import { GitHubService } from "@/server/auth/github";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    const storedState = req.cookies.get("github_oauth_state")?.value;

    if (!code || !state || !storedState || state !== storedState) {
      return new Response("Invalid state", { status: 400 });
    }

    const githubService = GitHubService.getInstance();
    const tokenData = await githubService.exchangeCodeForToken(code);
    await githubService.linkGitHubAccount(userId, tokenData);

    // Clear state cookie and redirect to success page
    const response = Response.redirect(
      new URL("/settings/integrations", req.url)
    );
    response.headers.set(
      "Set-Cookie",
      "github_oauth_state=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0"
    );

    return response;
  } catch (error) {
    console.error("GitHub callback error:", error);
    return Response.redirect(
      new URL("/settings/integrations?error=github_auth_failed", req.url)
    );
  }
}
