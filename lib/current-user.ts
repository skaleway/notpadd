// import { auth } from "@clerk/nextjs";
import { db } from "./db";
import { currentUser } from "@clerk/nextjs";

export async function getCurrentUser() {
  try {
    const user = await currentUser();

    if (!user) return;

    console.log("I'm finding something");

    const userInDb = await db.user.findUnique({
      where: {
        userId: user?.id,
      },
    });

    if (userInDb) return userInDb;

    const createNewUserInDb = await db.user.create({
      data: {
        userId: user.id,
        username: user.username as string,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return createNewUserInDb;
  } catch (error: any) {
    console.log(error.message);
  }
}
