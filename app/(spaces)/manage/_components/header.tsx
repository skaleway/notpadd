"use client";

import { useClerk } from "@clerk/nextjs";
import { icons, Menu, Plus, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import Logo from "@/components/logo";
import Feedback from "@/components/modals/feedback";
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
import { sidebarRoutes } from "@/constants";
import { useSpaceModal } from "@/hooks/use-space-modal";
import Link from "next/link";
import SidebarItem from "./sidebar-item";

const Header = () => {
  const spaceModal = useSpaceModal();
  const { signOut } = useClerk();
  const pathname = usePathname();
  const routes = sidebarRoutes();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(() => router.push("/sign-in"));
  };

  return (
    <header className="flex h-14 items-center gap-4 border-b sticky bg-background top-0 z-50 px-4 lg:h-[60px] lg:px-6 ">
      <div className="flex lg:max-w-7xl lg:mx-auto w-full gap-3 justify-between">
        <Logo isAuth />
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
              <Feedback />
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex gap-3 items-center">
          {pathname.includes("manage/spaces") && (
            <Button
              className="flex items-center gap-2"
              onClick={() => spaceModal.onOpen()}
              variant="zbtn"
            >
              <Plus className="w-4 h-4" />
              Create space
            </Button>
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
              <DropdownMenuItem className="p-0">
                <Link href="/manage/settings" className="w-full p-1">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="cursor-pointer"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
