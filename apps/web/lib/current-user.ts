// import { auth } from "@clerk/nextjs";
import { db } from "@workspace/db";
import { currentUser, auth, clerkClient } from "@clerk/nextjs/server";

export async function getCurrentUser() {
  const { userId } = await auth();

  if (!userId) return null;

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}

//  2. Create a new file named `current-user.ts` in the `apps/web/lib` directory and add the following code:
