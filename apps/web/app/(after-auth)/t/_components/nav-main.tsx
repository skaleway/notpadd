"use client"

import { useSidebarRoutes } from "@/constants"
import { useTeams } from "@/hooks/use-team"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain() {
  const { teamId } = useTeams()
  const routes = useSidebarRoutes(teamId)
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2 items-center justify-center">
        <SidebarMenu className="mt-10">
          {routes.map(item => {
            const active = pathname === item.url
            return (
              <SidebarMenuItem key={item.title} className="w-full">
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  className="group-data-[collapsible=icon]:!min-h-10 group-data-[collapsible=icon]:!min-w-10 min-h-10 ml-1"
                  isActive={active}
                >
                  <Link href={item.url} className="cursor-pointer">
                    {item.icon && <item.icon className="!size-6" />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
