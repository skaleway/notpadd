"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useTeams } from "@/hooks/use-team";
import { useSpaceModal } from "@/store/space";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger, useSidebar } from "@workspace/ui/components/sidebar";
import { motion as m, MotionConfig } from "motion/react";
import Link from "next/link";

export function TeamsHeader() {
  const { onOpen } = useSpaceModal();
  const { team } = useTeams();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear justify-between pr-4 ">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger>
          <SidebarTriggerIcon />
        </SidebarTrigger>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Create space
        </Button>
      </div>
    </header>
  );
}

const SidebarTriggerIcon = () => {
  const { open } = useSidebar();
  return (
    <MotionConfig
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.5,
        stiffness: 120,
        damping: 8,
      }}
    >
      <div className="size-6 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
        </svg>
        <m.div
          className="absolute w-0.5 bg-primary h-[18px] top-0 bottom-0 my-auto left-2 rounded-[1px]"
          animate={{
            height: "10px",
            left: open ? "8px" : "6px",
            width: open ? "6px" : "2px",
          }}
        />
      </div>
    </MotionConfig>
  );
};

const Breadcrumbs = () => {
  const { team } = useTeams();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link
            href={`/t/${team?.id}`}
            className="text-base font-medium"
            prefetch
          >
            {team?.name}
          </Link>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
