"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { icons } from "lucide-react";

const Sidebar = () => {
  const routes = sidebarRoutes();

  return (
    <div className="hidden border-r md:block flex-1 py-4">
      <div className="bg-white fixed left-0 top-0 h-screen w-full -z-10 flex">
        <div className="bg-muted/40 flex-[0.97] " />

        <div className="flex-[2]" />
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium">
          {routes.map((route, index) => (
            <SidebarItem
              href={route.href}
              icon={route.icon as keyof typeof icons}
              label={route.label}
              key={index}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
