import { auth } from "@clerk/nextjs/server";
import { db } from "@workspace/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
import { utapi } from "./ut";

const f = createUploadthing();

const handleAuth = async () => {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  return { userId: userId };
};

export const ourFileRouter: FileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const { userId } = await handleAuth();
      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
  articleImagePreview: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(
      z.object({
        slug: z.string(),
        spaceId: z.string(),
      })
    )
    .middleware(async ({ req, input }) => {
      const { userId } = await handleAuth();
      const article = await db.article.findUnique({
        where: {
          slug_spaceId: {
            slug: input.slug,
            spaceId: input.spaceId,
          },
        },
      });
      if (!article) throw new UploadThingError("Article not found");

      const imageKey = article.previewImage?.split("/f/")[1];

      return { userId, input, article: { ...article, previewImage: imageKey } };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { article } = metadata;
      await Promise.all([
        db.article.update({
          where: {
            id: article.id,
          },
          data: { previewImage: file.ufsUrl },
        }),
        utapi.deleteFiles(article.previewImage ?? ""),
      ]);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
