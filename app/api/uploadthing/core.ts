import { getCurrentUser } from "@/lib/current-user";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  image: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await getCurrentUser();

      if (!user) throw new UploadThingError("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
