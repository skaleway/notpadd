"use client"; // this registers <Editor> as a Client Component

import {
  BlockNoteView,
  useCreateBlockNote,
  useEditorChange,
} from "@blocknote/react";
import { PartialBlock, BlockNoteEditor } from "@blocknote/core";
import { toast } from "sonner"; // Correct library name
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { useEffect } from "react";
import { updateNote } from "@/actions/note";

// Our <Editor> component we can reuse later
const Editor = ({
  noteId,
  initialContent,
}: {
  noteId: string;
  initialContent: string;
}) => {
  // Creates a new editor instance.
  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
  });
  const changed = useEditorChange(() => {}, editor);
  console.log(changed);

  const container = editor.onChange(({ document }) => {
    const stringContent = JSON.stringify(document);
    const promise = updateNote(stringContent, noteId); // Assuming updateNote is defined elsewhere
    toast.promise(promise, {
      loading: "saving a new note...",
      success: "Noted updated!",
      error: "Something.",
    });
  });

  useEffect(() => {
    container();
  }, [container]); // Fix dependency array

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} theme="light" />;
};

export default Editor;
