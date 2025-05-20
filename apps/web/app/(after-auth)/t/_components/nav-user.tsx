"use client";

import { MoreVerticalIcon } from "lucide-react";

import { useSession } from "@/provider/session";
import { useLogoutStore } from "@/store/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Icons } from "@workspace/ui/components/icons";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@workspace/ui/components/sidebar";
import Profile from "@workspace/ui/components/user-profile";

export function NavUser() {
  const { isMobile } = useSidebar();

  const { user } = useSession();

  const { onOpen } = useLogoutStore();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="group-data-[collapsible=icon]:!p-1 p-1 group-data-[collapsible=icon]:!min-w-12 group-data-[collapsible=icon]:!min-h-12"
            >
              <Profile
                name={user.name as string}
                size="lg"
                url={user.imageUrl as string}
                className="group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!min-w-10 group-data-[collapsible=icon]:!min-h-10"
              />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
              <MoreVerticalIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Profile
                  name={user.name as string}
                  url={user.imageUrl as string}
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icons.user className="size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons.banknote className="size-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Icons.bell className="size-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onOpen}>
              <Icons.logout className="size-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
