"use client";

import { useSidebarRoutes } from "@/app/constants";
import { useTeams } from "@/hooks/use-team";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@workspace/ui/components/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain() {
  const { teamId } = useTeams();
  const routes = useSidebarRoutes(teamId);
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="mt-10">
          {routes.map((item) => {
            const active = pathname === item.url || pathname.includes(item.url);
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  tooltip={item.title}
                  asChild
                  isActive={active}
                >
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
