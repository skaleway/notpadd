"use client"

import { ChevronsUpDown, Plus, Users } from "lucide-react"

import { useTeams } from "@/hooks/use-team"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"
import { useRouter } from "next/navigation"
import { cn } from "@workspace/ui/lib/utils"
import { useTeamStore } from "@/store/team"
import SuperImage from "@/components/modal/image"
import Image from "next/image"

export function TeamSwitcher() {
  const { isMobile } = useSidebar()
  const { team, setTeamId, teams, teamId } = useTeams()
  const { onOpen } = useTeamStore()

  const router = useRouter()

  return (
    <SidebarMenu>
      <SidebarMenuItem className="relative  px-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="group-data-[collapsible=icon]:!p-1 p-1 group-data-[collapsible=icon]:!min-w-12 group-data-[collapsible=icon]:!min-h-12"
            >
              <div className="flex size-10 group-data-[collapsible=icon]:min-w-10 group-data-[collapsible=icon]:min-h-10 items-center relative justify-center rounded-lg !min-w-10 !min-h-10 border bg-background overflow-hidden">
                {team?.imageUrl ? (
                  <Image src={team?.imageUrl} fill alt={team?.name} className="object-cover" />
                ) : (
                  <div className="flex size-10 items-center justify-center rounded-lg border bg-background">
                    <Users className="size-4" />
                  </div>
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{team?.name}</span>
                <span className="truncate text-xs">Free</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-xs text-muted-foreground">Teams</DropdownMenuLabel>
            {teams?.map((team, index) => {
              const activeTeams = teamId === team.id
              return (
                <DropdownMenuItem
                  key={team.id}
                  onClick={() => {
                    router.push(`/t/${team.id}`)
                    setTeamId(team.id)
                  }}
                  className={cn("gap-2 p-2", {
                    "bg-accent text-accent-foreground": activeTeams,
                  })}
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border"></div>
                  {team.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              )
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={() => {
                onOpen()
              }}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                <Plus className="size-4" />
              </div>
              <div className="font-medium text-muted-foreground">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
