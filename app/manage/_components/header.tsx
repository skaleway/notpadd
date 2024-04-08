"use client";

import { User, Menu, icons } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/logo";
import { sidebarRoutes } from "@/constants";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";
import CreateNewProject from "@/components/modals/create-project";

const Header = ({ userId }: { userId?: string }) => {
  const pathname = usePathname();
  const routes = sidebarRoutes();
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card sticky top-0 z-50 px-4 lg:h-[60px] lg:px-6 ">
      <div className="flex lg:max-w-7xl lg:mx-auto w-full gap-3 justify-between">
        <Logo />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Logo />
              {routes.map((route, index) => (
                <SidebarItem
                  href={route.href}
                  icon={route.icon as keyof typeof icons}
                  label={route.label}
                  key={index}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex gap-3 items-center">
          {pathname.includes("manage/projects") && (
            <CreateNewProject userId={userId!} />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
