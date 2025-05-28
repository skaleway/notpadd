"use client"

import { buttonVariants } from "@workspace/ui/components/button"
import { Icons } from "@workspace/ui/components/icons"
import { useRouter } from "next/navigation"
import Link from "next/link"
import React from "react"

const NotFound = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] my-auto h-full max-h-full">
      <h1 className="text-4xl font-bold flex items-center gap-2">
        <Icons.logo className="size-10" />
        404
      </h1>
      <p className="text-lg text-muted-foreground mt-2">Page not found</p>
      <button
        onClick={() => router.back()}
        className={buttonVariants({
          variant: "outline",
          className: "mt-4",
        })}
      >
        Go back to home
      </button>
    </div>
  )
}

export default NotFound
