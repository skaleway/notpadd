import React, { ReactNode } from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "../_components/sidebar";
import { TeamsHeader } from "../_components/teams-header";

const TeamLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ teamId: string }>;
}) => {
  const { teamId } = await params;

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <TeamsHeader />
        <div className="flex flex-1 flex-col">
          <div className="container flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default TeamLayout;
