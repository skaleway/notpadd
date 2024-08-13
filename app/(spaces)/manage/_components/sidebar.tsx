"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { CreditCard, icons } from "lucide-react";
import Feedback from "@/components/modals/feedback";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sidebar = () => {
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
      <div>
        <Billing />
        <Feedback />
      </div>
    </div>
  );
};

function Billing() {
  return (
    <Link
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer"
      )}
      href="/manage/billing"
    >
      <CreditCard className="h-4 w-4" />
      <span className="text-lg font-semibold">Billing</span>
    </Link>
  );
}

export default Sidebar;
