// import { auth } from "@clerk/nextjs";
import { db } from "./db";

export async function getCurrentUser() {
  try {
    const userId = "73313966-4165-4867-b854-4b24fdc94776";
    if (userId) {
      const existingUser = await db.user.findUnique({
        where: {
          id:userId,
        },
      });

      if (existingUser) return existingUser;
    }

    const user = await db.user.create({
      data: {
        userId: "34567890-987654",
        username: "code-env",
        email: "example@codeenv.com",
      },
    });

    return user;
  } catch (error: any) {
    console.log(error.message);
  }
}
