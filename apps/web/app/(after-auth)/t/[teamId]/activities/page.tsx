import React from "react"
import Activities from "./activities"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Activities",
  description: "Activities",
}

const Page = async ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = await params
  return (
    <div>
      <Activities params={{ teamId }} />
    </div>
  )
}

export default Page
