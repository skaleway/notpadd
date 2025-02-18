import { z } from "zod";

export const githubIntegrationSchema = z.object({
  userId: z.string(),
  provider: z.literal("github").default("github"),
  providerId: z.string(),
  accessToken: z.string(),
  refreshToken: z.string().nullable().optional(),
  tokenScope: z.array(z.string()),
  tokenExpiresAt: z.date().nullable(),
});

export type GithubIntegration = z.infer<typeof githubIntegrationSchema>;
