"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Sidebar = () => {
  const routes = sidebarRoutes();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Logo />
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {routes.map((route, index) => (
              <SidebarItem
                href={route.href}
                icon={route.icon}
                label={route.label}
                key={index}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
