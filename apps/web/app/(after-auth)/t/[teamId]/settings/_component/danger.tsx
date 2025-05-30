"use client"

import { useDelete } from "@/hooks/use-delete"
import { useTeams } from "@/hooks/use-team"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { useEffect } from "react"

const Danger = () => {
  const { setIsOpen } = useDelete()
  const { team } = useTeams()

  const handleDelete = () => {
    setIsOpen(true, "team", { name: team?.name, id: team?.id })
  }

  return (
    <Card className="flex flex-col p-0 relative border-destructive">
      <CardHeader className="p-6 flex flex-col gap-2">
        <CardTitle>Delete Team</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          <span>
            Permanently remove your team and all of its contents from the platform. This action is
            not reversible, so please continue with caution.
          </span>
        </CardDescription>
      </CardHeader>
      <div className="absolute top-4 right-4"></div>
      <CardFooter className="border-t pt-6 bg-destructive/20 border-destructive flex justify-end">
        <Button variant="destructive" className="max-w-40 w-full" onClick={handleDelete}>
          Delete Team
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Danger
