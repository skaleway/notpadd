"use client";

import { useSpaceModal } from "@/hooks/use-space-modal";
import React from "react";

const CreateSpace = () => {
  const spaceModal = useSpaceModal();
  return (
    <div
      onClick={() => spaceModal.onOpen()}
      className="border border-border  rounded-md flex cursor-pointer flex-col items-center w-fi p-2 w-fit justify-center gap-8 bg-muted"
    >
      <h1>Create Space</h1>
    </div>
  );
};

export default CreateSpace;
