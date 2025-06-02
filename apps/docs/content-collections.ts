import { defineCollection, defineConfig } from "@content-collections/core"
import { z } from "zod"
import { compileMDX } from "@content-collections/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { rehypeParseCodeBlocks } from "./shiki-rehyped.mjs"
import { slugify } from "@/lib/utils"

type RegexMatch = {
  groups?: {
    flag?: string
    content?: string
  }
}

const docs = defineCollection({
  name: "docs",
  directory: "/docs",
  include: ["**/*.md", "**/*.mdx"],
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    headings: z
      .array(
        z.object({
          level: z.number(),
          text: z.string(),
          slug: z.string(),
        }),
      )
      .optional(),
    mdx: z.any().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [
        rehypeParseCodeBlocks,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
            },
          },
        ],
      ],
    })

    const regXHeader = /^(?:[\n\r]|)(?<flag>#{1,6})\s+(?<content>.+)/gm
    const headings = Array.from(document.content.matchAll(regXHeader)).map((match: RegexMatch) => {
      const flag = match.groups?.flag
      const content = match.groups?.content
      return {
        level: flag?.length || 1,
        text: content || "",
        slug: slugify(content || "#"),
      }
    })

    return {
      ...document,
      headings,
      mdx,
    }
  },
})

export default defineConfig({
  collections: [docs],
})
