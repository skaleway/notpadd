"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@workspace/ui/components/sidebar"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="dark:bg-muted/50 bg-muted">
      <SidebarHeader className="flex items-center justify-center min-h-16 relative">
        <TeamSwitcher />

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border  group-data-[collapsible=icon]:w-2/3 mx-auto w-[calc(100%-2rem)]" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-center min-h-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-border  group-data-[collapsible=icon]:w-2/3 mx-auto w-[calc(100%-2rem)]" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
