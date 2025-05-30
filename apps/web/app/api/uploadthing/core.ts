import { auth } from "@clerk/nextjs/server"
import { db } from "@workspace/db"
import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"
import { z } from "zod"
import sharp from "sharp"
import { utapi } from "./ut"

const f = createUploadthing()

const handleAuth = async () => {
  const { userId } = await auth()

  if (!userId) throw new Error("Unauthorized")

  return { userId: userId }
}

/**
 * Generate a blurred data URL from an image buffer
 * @param buffer - The image buffer
 * @param width - The width of the blurred image (default: 8)
 * @param height - The height of the blurred image (default: based on aspect ratio)
 * @returns A base64 encoded blurred data URL for the image
 */
export async function generateBlurDataUrl(
  buffer: Buffer,
  width = 8,
  height?: number,
): Promise<string> {
  try {
    // Get original image metadata
    const metadata = await sharp(buffer).metadata()

    // Calculate height if not provided
    if (!height && metadata.width && metadata.height) {
      height = Math.round((metadata.height / metadata.width) * width)
    } else {
      height = width
    }

    // Generate a low-resolution version of the image
    const blurredBuffer = await sharp(buffer)
      .resize(width, height, { fit: "inside" })
      .toFormat("webp")
      .webp({ quality: 20 })
      .toBuffer()

    // Convert to base64
    const base64String = blurredBuffer.toString("base64")
    return `data:image/webp;base64,${base64String}`
  } catch (error) {
    console.error("Error generating blur data URL:", error)
    return ""
  }
}

const deleteImage = async (imageUrl: string | undefined | null) => {
  if (!imageUrl) return

  const key = imageUrl.split("/f/")[1]
  if (key) {
    await utapi.deleteFiles(key)
  }
}

export const ourFileRouter: FileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const { userId } = await handleAuth()
      return { userId }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)

      console.log("file url", file.ufsUrl)
      return { uploadedBy: metadata.userId }
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
      }),
    )
    .middleware(async ({ req, input }) => {
      const { userId } = await handleAuth()
      const article = await db.article.findUnique({
        where: {
          slug_spaceId: {
            slug: input.slug,
            spaceId: input.spaceId,
          },
        },
        include: {
          space: {
            include: {
              team: true,
            },
          },
        },
      })
      if (!article) throw new UploadThingError("Article not found")

      const imageKey = article.previewImage?.split("/f/")[1]

      return { userId, input, article: { ...article, previewImage: imageKey } }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const imageResponse = await fetch(file.ufsUrl)
      const imageBuffer = Buffer.from(await imageResponse.arrayBuffer())

      const blurDataUrl = await generateBlurDataUrl(imageBuffer)
      const { article } = metadata

      await Promise.all([
        db.article.update({
          where: {
            id: article.id,
          },
          data: {
            previewImage: file.ufsUrl,
            previewBlur: blurDataUrl,
          },
        }),
        db.activity.create({
          data: {
            teamId: article.space.team.id,
            type: "article_updated",
            userId: metadata.userId,
            description: `Updated article preview image`,
          },
        }),
        deleteImage(article.previewImage),
      ])
    }),
  teamImageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .input(
      z.object({
        teamId: z.string(),
      }),
    )
    .middleware(async ({ req, input }) => {
      const { userId } = await handleAuth()
      const team = await db.team.findUnique({
        where: {
          id: input.teamId,
        },
      })
      if (!team) throw new UploadThingError("Team not found")

      return { userId, input, team }
    })

    .onUploadComplete(async ({ metadata, file }) => {
      const { team, userId } = metadata

      const imageResponse = await fetch(file.ufsUrl)
      const imageBuffer = Buffer.from(await imageResponse.arrayBuffer())

      const blurDataUrl = await generateBlurDataUrl(imageBuffer)

      await Promise.all([
        db.team.update({
          where: { id: team.id },
          data: { imageUrl: file.ufsUrl, imageBlur: blurDataUrl },
        }),
        db.activity.create({
          data: {
            teamId: team.id,
            type: "team_updated",
            userId: userId,
            description: `Updated team profile image`,
          },
        }),
        deleteImage(team.imageUrl),
      ])

      console.log("Upload complete for team:", team.id)

      return {
        teamId: team.id,
        imageUrl: file.ufsUrl,
        imageBlur: blurDataUrl,
        name: team.name,
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
