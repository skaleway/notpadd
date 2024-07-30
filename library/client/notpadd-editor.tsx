"use client";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import { NotpaddEditorProps } from "../types";

export default function NotpaddContent({ content, theme }: NotpaddEditorProps) {
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: content
      ? (JSON.parse(content) as PartialBlock[])
      : undefined,
  });

  return <BlockNoteView editor={editor} theme={theme} editable={false} />;
}
