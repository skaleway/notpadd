"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { useSpaceModal } from "@/store/space";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarTrigger } from "@workspace/ui/components/sidebar";

export function TeamsHeader() {
  const { onOpen } = useSpaceModal();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear justify-between pr-4 ">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Spaces</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Create New space
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
