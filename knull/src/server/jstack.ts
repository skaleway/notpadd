import { auth, clerkClient } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "hono/adapter";
import { jstack } from "jstack";
import { db } from "./db";

interface Env {
  Bindings: { DATABASE_URL: string };
}

export const j = jstack.init<Env>();

/**
 * Type-safely injects database into all procedures
 *
 * @see https://jstack.app/docs/backend/middleware
 */

const databaseMiddleware = j.middleware(async ({ c, next }) => {
  const { DATABASE_URL } = env(c);

  const sql = neon(DATABASE_URL);
  const db = drizzle(sql);

  return await next({ db });
});

const protectedMiddleware = j.middleware(async ({ c, next }) => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const user = (await clerkClient()).users.getUser(userId);

  if (!user) throw new Error("User not found");

  return await next({ user, db });
});
/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const publicProcedure = j.procedure.use(databaseMiddleware);

export const protectedProcedure = j.procedure.use(protectedMiddleware);
