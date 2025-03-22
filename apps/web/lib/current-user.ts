// import { auth } from "@clerk/nextjs";
import { db } from "@workspace/db";
import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentUser() {
  try {
    const user = await currentUser();

    if (!user) return;

    const userInDb = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (userInDb) return userInDb;

    const createNewUserInDb = await db.user.create({
      data: {
        id: user.id,
        name: user.username as string,
        email: user.emailAddresses[0]?.emailAddress as string,
        imageUrl: user.imageUrl,
        role: "User",
      },
    });

    return createNewUserInDb;
  } catch (error: any) {
    console.log(error.message);
  }
}
