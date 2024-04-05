"use client";

import React from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { createNewNote } from "@/actions/note";

const CreateNoteButton = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const create = () => {
    const promise = createNewNote(userId).then(({ id }) =>
      router.push(`/notes/${id}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };
  return (
    <Button onClick={create} className="flex gap-2">
      Create note <Plus />
    </Button>
  );
};

export default CreateNoteButton;
