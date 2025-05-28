"use client"

import { useSpaceModal } from "@/store/space"
import React from "react"
import { Button } from "@workspace/ui/components/button"
const NoSpace = () => {
  const { onOpen } = useSpaceModal()
  return (
    <div className="max-w-5xl border border-dashed h-96 flex items-center justify-center flex-col gap-4 rounded">
      <p className="text-sm text-muted-foreground">No spaces found. Create one to get started.</p>
      <Button onClick={onOpen} className="w-fit">
        Create space
      </Button>
    </div>
  )
}

export default NoSpace
