import React from "react";
import { Metadata } from "next";
import { getCurrentUser } from "@/lib/current-user";
import { getUsersProject } from "@/actions/note";
import CreateNewProject from "@/components/modals/create-project";
import LatestProject from "../_components/latest-projects";
import { Project } from "@prisma/client";

export const metadata: Metadata = {
  title: "Project",
  description: "Manage your Projects in one clicks",
};

const Projects = async () => {
  const user = await getCurrentUser();

  // console.log(user);

  if (!user) return;

  const projects = await getUsersProject(user?.id!);

  if (projects?.length === 0)
    return (
      <div className="border-dashed border rounded-md h-full flex flex-col items-center justify-center gap-8">
        <h1>You have no project yet that you can work on.</h1>
        <CreateNewProject userId={user?.id!} />
      </div>
    );

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="text-semibold">
        <h1>Projects</h1>
      </div>
      <LatestProject projects={projects as Project[]} />
    </div>
  );
};

export default Projects;
