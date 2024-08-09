"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { icons } from "lucide-react";
import Feedback from "@/components/modals/feedback";

const Sidebar = ({ userId }: { userId: string }) => {
  const routes = sidebarRoutes();

  return (
    <div className="hidden border-r md:flex flex-1 py-4 sticky top-14 gap-10 sm-height md:flex-col">
      <div className="flex-1">
        <nav className="grid items-start pr-2 text-sm font-medium">
          {routes.map((route, index) => (
            <SidebarItem
              href={route?.href!}
              icon={route.icon as keyof typeof icons}
              label={route.label}
              key={index}
            />
          ))}
        </nav>
      </div>
      <Feedback />
    </div>
  );
};

export default Sidebar;
