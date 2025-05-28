"use client"

import "@blocknote/mantine/style.css"
import "@blocknote/core/fonts/inter.css"

import "./editor.css"

import { updateArticle } from "@/actions/article"
import { useUploadThing } from "@/lib/uploadthing"
import { BlockNoteEditor, PartialBlock } from "@blocknote/core"
import { BlockNoteView } from "@blocknote/mantine"
import { useCreateBlockNote } from "@blocknote/react"
import { Article } from "@workspace/db"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useBreadcrumbStore } from "@/store/breadcrumb"
import { useTeams } from "@/hooks/use-team"

const Editor = ({ article }: { article: Article }) => {
  const { resolvedTheme } = useTheme()
  const [, setIsTyping] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const { startUpload } = useUploadThing("imageUploader")
  const [, setIsUploading] = useState(false)

  let typingTimer: NodeJS.Timeout

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const uploadFile = async (file: File) => {
    try {
      const files = [file]
      const imgRes = startUpload(files)
      const newImage = await imgRes
      if (newImage) {
        const imageUrl = newImage[0]?.ufsUrl
        const document = JSON.stringify(editor.document)
        const promise = updateArticle({
          content: document,
          slug: article.slug,
          spaceId: article.spaceId,
        })
        toast.promise(promise, {
          loading: "Saving...",
          success: "Saved",
          error: "Something went wrong.",
        })
        return imageUrl || ""
      } else {
        throw new Error("Image upload failed or returned empty URL.")
      }
    } catch (error: any) {
      console.log("Error uploading file: ", error.message)
      throw error
    } finally {
      setIsUploading(false)
    }
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: article.content
      ? (JSON.parse(article.content as string) as PartialBlock[])
      : undefined,
    uploadFile,
  })

  const handleInputChange = () => {
    setIsTyping(true)
    clearTimeout(typingTimer)
    typingTimer = setTimeout(() => {
      setIsTyping(false)
      const document = JSON.stringify(editor.document)
      const promise = updateArticle({
        content: document,
        slug: article.slug,
        spaceId: article.spaceId,
      })
      toast.promise(promise, {
        loading: "Saving...",
        success: "Saved",
        error: "Something went wrong.",
      })
    }, 10000)
  }

  useEffect(() => {
    const editorElement = document.querySelector(".blocknote-editor")

    if (editorElement) {
      editorElement.addEventListener("keypress", handleInputChange)
    }

    return () => {
      if (editorElement) {
        editorElement.removeEventListener("keypress", handleInputChange)
      }
    }
  }, [editor.onChange])

  if (!isMounted) return null

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "light" ? "light" : "dark"}
      onChange={handleInputChange}
      className="font-sans min-h-screen"
      data-theming-css-variables-demo
    />
  )
}

export default Editor
