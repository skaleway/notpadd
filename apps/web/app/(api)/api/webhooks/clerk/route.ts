import { db } from "@workspace/db";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { Webhook } from "svix";
import { getClerkUser } from "@/lib/current-user";

export async function POST(req: Request) {
  const CLERK_WH_SECRET =
    process.env.NODE_ENV === "development"
      ? process.env.CLERK_DEV_WH_SECRET
      : process.env.CLERK_WH_SECRET;

  if (!CLERK_WH_SECRET) {
    throw new Error(
      "Please add CLERK_WH_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(CLERK_WH_SECRET);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const { id } = evt.data;
  const eventType = evt.type;

  switch (eventType) {
    case "user.created": {
      try {
        const {
          email_addresses,
          primary_email_address_id,
          username,
          image_url,
          id: userId,
        } = evt.data;
        // Safely find the primary email address
        const primaryEmail = email_addresses.find(
          (email) => email.id === primary_email_address_id
        );

        if (!primaryEmail) {
          console.error("No primary email found");
          return new Response("No primary email found", { status: 400 });
        }

        // Create the user in the database
        await db.user.create({
          data: {
            id: userId as string,
            email: primaryEmail.email_address as string,
            name: username as string,
            imageUrl: image_url as string,
          },
        });
        return new Response("User created successfully", { status: 200 });
      } catch (error: any) {
        console.error("Error creating user in database:", error.message);
        return new Response("Error creating user", { status: 500 });
      }
      break;
    }
    case "user.deleted":
      {
        try {
          const { id: userId } = evt.data;

          const userInDb = await db.user.findUnique({
            where: {
              id: userId as string,
            },
          });

          if (!userInDb) {
            console.error("User not found in database");
            return new Response("User not found in database", { status: 404 });
          }

          await db.user.delete({
            where: { id: userId as string },
          });

          return new Response("User deleted successfully", { status: 200 });
        } catch (error: any) {
          console.error("Error deleting user in database:", error.message);
          return new Response("Error deleting user", { status: 500 });
        }
      }
      break;
    case "session.created": {
      const { user_id } = evt.data;

      const clerkUser = await getClerkUser(user_id);
      if (!clerkUser) {
        console.error("User not found in Clerk");
        return new Response("User not found in Clerk", { status: 404 });
      }

      const userInDb = await db.user.findUnique({
        where: {
          id: clerkUser.id as string,
        },
      });

      if (!userInDb) {
        await db.user.create({
          data: {
            id: clerkUser.id as string,
            email: clerkUser.emailAddresses[0]?.emailAddress as string,
            name: clerkUser.username as string,
            imageUrl: clerkUser.imageUrl as string,
          },
        });
      }

      break;
    }
  }

  return new Response("Webhook received successfully", { status: 200 });
}
