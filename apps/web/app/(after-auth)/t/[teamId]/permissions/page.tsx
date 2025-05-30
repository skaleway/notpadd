import Image from "next/image"
import React from "react"

const Permissions = () => {
  return (
    <div className="container mx-auto p-6 space-y-6 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Team Permissions</h1>
        <p className="text-muted-foreground">Manage the permissions for your team.</p>
      </div>
      <div className="space-y-4 flex justify-center items-center ">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src="/construction.webp"
              alt="Under Construction"
              width={100}
              height={100}
              className="object-cover rounded-md"
              // quality={100}
            />
            <h2 className="text-lg font-medium">This page is under construction.</h2>
            <p className="text-sm text-muted-foreground">Please check back later.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Permissions
