import React, { ReactNode } from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "../_components/sidebar";
import { TeamsHeader } from "../_components/teams-header";
import { notFound } from "next/navigation";
import { tryCatch } from "@/lib/try-catch";
import { db } from "@workspace/db";

const getTeamFromParams = async ({ teamId }: { teamId: string }) => {
  const team = await db.team.findUnique({
    where: { id: teamId },
  });

  return team;
};

const TeamLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ teamId: string }>;
}) => {
  const { teamId } = await params;

  const data = await getTeamFromParams({ teamId });
  if (!data) return notFound();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <div className="w-full sticky top-0 bg-background z-50">
          <TeamsHeader />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="container max-w-6xl flex flex-1 flex-col gap-2">
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
