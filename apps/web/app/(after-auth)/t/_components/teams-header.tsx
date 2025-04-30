"use client";

import Border from "@/components/border";
import SearchModal from "@/components/modal/search";
import { ModeToggle } from "@/components/mode-toggle";
import { useSidebarRoutes } from "@/constants";
import { useTeams } from "@/hooks/use-team";
import { removeDuplicatedByProperty } from "@/lib/remove-duplicated";
import { useBreadcrumbStore } from "@/store/breadcrumb";
import { useInviteStore } from "@/store/invite";
import { useSpaceModal } from "@/store/space";
import { Badge } from "@workspace/ui/components/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger, useSidebar } from "@workspace/ui/components/sidebar";
import { Command, LinkIcon, Search } from "lucide-react";
import { motion as m, MotionConfig } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

export function TeamsHeader() {
  const { onOpen } = useSpaceModal();
  const [value, setValue] = useState("");
  const { teamId } = useTeams();

  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear justify-between relative">
      <div className="flex w-full items-center gap-1 lg:gap-2 pl-3">
        <SidebarTrigger>
          <SidebarTriggerIcon />
        </SidebarTrigger>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumbs />
      </div>
      <div className="flex items-center gap-2 pr-3 flex-1">
        <div className="relative">
          <div className="min-w-96 w-full h-10 border rounded-md bg-muted flex items-center gap-2 justify-between px-2 select-none cursor-pointer z-20 relative">
            <Search className="size-4 text-muted-foreground" />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search spaces..."
              className="bg-transparent border-none px-0"
            />

            <Badge className="flex items-center px-1 py-1 rounded-sm bg-background text-muted-foreground hover:bg-background/80">
              <Command className="size-3" /> <span>F</span>
            </Badge>
          </div>
          <SearchModal value={value} teamId={teamId} />
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <ModeToggle />
        <Button
          variant="outline"
          size="icon"
          className="min-w-28 flex items-center gap-2"
        >
          <LinkIcon className="size-4 " />
          Share
        </Button>
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Create space
        </Button>
      </div>

      <Border />
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
  const { teamId } = useTeams();
  const { breadcrumb } = useBreadcrumbStore();
  const pathname = usePathname();

  const breadcrumbWithoutDuplicated = removeDuplicatedByProperty(
    breadcrumb,
    "href"
  );

  const sidebarRoutes = useSidebarRoutes(teamId);

  const headers: Record<string, string> = Object.fromEntries(
    sidebarRoutes.map((route) => [route.url, route.title])
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbWithoutDuplicated.length > 0 ? (
          breadcrumbWithoutDuplicated.map((item, index) => {
            const href = `/${breadcrumbWithoutDuplicated
              .slice(0, index + 1)
              .join("/")}`;
            let linkName =
              item.label?.[0]?.toUpperCase() +
                item.label?.slice(1, item.label?.length) || "";

            const isLastPath = breadcrumbWithoutDuplicated.length === index + 1;
            if (linkName === "Dashboard") return (linkName = "Home");

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {!isLastPath ? (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{linkName}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{linkName}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {breadcrumbWithoutDuplicated.length !== index + 1 && (
                  <BreadcrumbSeparator />
                )}
              </Fragment>
            );
          })
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>{headers[pathname]}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
