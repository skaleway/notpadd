"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { icons } from "lucide-react";
import Feedback from "@/components/modals/feedback";

const Sidebar = ({ userId }: { userId: string }) => {
  const routes = sidebarRoutes();

  return (
    <div className="hidden border-r md:block flex-1 py-4 sticky top-14 sm-height">
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
          <Feedback userId={userId} />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
