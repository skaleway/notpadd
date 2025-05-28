"use client"

import { useTeams } from "@/hooks/use-team"
import { useBreadcrumbStore } from "@/store/breadcrumb"
import { Badge } from "@workspace/ui/components/badge"
import Link from "next/link"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
export type Space = {
  id: string
  name: string
  description: string
  teamId: string
  articles: { id: string }[]
}

const SpacesCards = ({ spaces }: { spaces: Space[] }) => {
  const { setBreadcrumb } = useBreadcrumbStore()
  const pathname = usePathname()

  useEffect(() => {
    setBreadcrumb([])
  }, [pathname])

  const { teamId } = useTeams()
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {spaces.map(space => (
        <Link
          href={`/t/${teamId}/${space.id}`}
          key={space.id}
          className="border rounded-md bg-white dark:bg-background p-4"
        >
          <h2>{space.name}</h2>
          <p>{space.description}</p>
          <div className="mt-4 flex items-center justify-end">
            <Badge variant="outline" className="rounded-md">
              {space.articles.length} articles
            </Badge>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default SpacesCards
