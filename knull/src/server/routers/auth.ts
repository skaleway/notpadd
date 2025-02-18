import { j, protectedProcedure } from "@/server/jstack";
import { eq } from "drizzle-orm";
import { userIntegrations } from "../db/schema";
import { githubIntegrationSchema } from "../validation/github";

export const authRouter = j.router({
  github: protectedProcedure
    .input(githubIntegrationSchema)
    .mutation(async ({ input, ctx }) => {
      const {
        userId,
        provider,
        providerId,
        accessToken,
        refreshToken,
        tokenScope,
        tokenExpiresAt,
      } = input;
      const { db } = ctx;

      const existingIntegration = await db
        .select()
        .from(userIntegrations)
        .where(eq(userIntegrations.userId, userId))
        .limit(1);

      console.log(existingIntegration);
    }),
});
