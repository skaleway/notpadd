import { client } from "@/lib/client";
import { Octokit } from "@octokit/rest";
import { githubIntegrationSchema } from "@/server/validation/github";

export interface GitHubUser {
  id: string;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

export interface GitHubTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  refresh_token_expires_in?: number;
  scope: string;
}

export class GitHubService {
  private static instance: GitHubService;

  private constructor() {}

  public static getInstance(): GitHubService {
    if (!GitHubService.instance) {
      GitHubService.instance = new GitHubService();
    }
    return GitHubService.instance;
  }

  async getAuthorizationUrl(state: string): Promise<string> {
    const scopes = ["user", "repo", "read:org"];

    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID as string,
      redirect_uri: process.env.GITHUB_CALLBACK_URL as string,
      scope: scopes.join(" "),
      state,
      allow_signup: "true",
    });

    return `https://github.com/login/oauth/authorize?${params.toString()}`;
  }

  async exchangeCodeForToken(code: string): Promise<GitHubTokenResponse> {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID as string,
      client_secret: process.env.GITHUB_CLIENT_SECRET as string,
      code,
      redirect_uri: process.env.GITHUB_CALLBACK_URL as string,
    });

    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to exchange code for token");
    }

    return response.json();
  }

  async getUserData(accessToken: string): Promise<GitHubUser> {
    const octokit = new Octokit({ auth: accessToken });
    const { data } = await octokit.users.getAuthenticated();

    return {
      id: data.id.toString(),
      login: data.login,
      name: data.name || data.login,
      email: data.email || "",
      avatar_url: data.avatar_url,
    };
  }

  async linkGitHubAccount(
    userId: string,
    tokenData: GitHubTokenResponse
  ): Promise<void> {
    const userData = await this.getUserData(tokenData.access_token);

    const expiresAt = tokenData.expires_in
      ? new Date(Date.now() + tokenData.expires_in * 1000)
      : null;

    const integrationData = githubIntegrationSchema.parse({
      userId,
      providerId: userData.id,
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      tokenScope: tokenData.scope.split(","),
      tokenExpiresAt: expiresAt,
    });

    await client.auth.github.$post({
      ...integrationData,
    });
  }
}
