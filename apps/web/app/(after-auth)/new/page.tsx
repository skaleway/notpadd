import NewTeam from "@/components/forms/new-team"
import { auth } from "@clerk/nextjs/server"
import { db } from "@workspace/db"
import { Metadata } from "next"
import { redirect } from "next/navigation"
import React from "react"

export const metadata: Metadata = {
  title: "New Team",
  description: "Create a new team",
}

const New = async () => {
  const { userId } = await auth()

  if (!userId) return
  const team = await db.team.findFirst({
    where: {
      members: {
        some: {
          userId,
        },
      },
    },
  })

  if (team) redirect(`/t/${team.id}`)

  return <NewTeam />
}

export default New
