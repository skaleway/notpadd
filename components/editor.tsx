"use client";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { updateNote } from "@/actions/note";
import { useUploadThing } from "@/utils/uploadthing";
import { useTheme } from "next-themes";

const Editor = ({
  noteId,
  initialContent,
  userId,
}: {
  noteId: string;
  initialContent: string;
  userId: string;
}) => {
  const [, setIsTyping] = useState(false);
  const [, setIsUploading] = useState(false);
  const { startUpload } = useUploadThing("image");
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  let typingTimer: NodeJS.Timeout;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const uploadFile = async (file: File) => {
    try {
      const files = [file];
      const imgRes = startUpload(files);
      const newImage = await imgRes;
      if (newImage) {
        const imageUrl = newImage[0].url;
        // Trigger saving the note right after the file is uploaded
        const document = JSON.stringify(editor.document);
        const promise = updateNote(document, noteId, userId);
        toast.promise(promise, {
          loading: "Saving...",
          success: "Saved",
          error: "Something went wrong.",
        });
        return imageUrl;
      } else {
        throw new Error("Image upload failed or returned empty URL.");
      }
    } catch (error: any) {
      console.log("Error uploading file: ", error.message);
      throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile,
  });

  const handleInputChange = () => {
    setIsTyping(true);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setIsTyping(false);
      const document = JSON.stringify(editor.document);
      const promise = updateNote(document, noteId, userId);
      toast.promise(promise, {
        loading: "Saving...",
        success: "Saved",
        error: "Something went wrong.",
      });
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("keypress", handleInputChange);

    return () => {
      window.removeEventListener("keypress", handleInputChange);
    };
  }, [editor.onChange, noteId, userId]);

  if (!isMounted) return null;

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "light" ? "light" : "dark"}
      onChange={handleInputChange}
    />
  );
};

export default Editor;
