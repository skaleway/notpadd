// import { auth } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { db } from "@workspace/db";

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
