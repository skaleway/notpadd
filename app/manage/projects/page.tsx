import React from "react";
import { Metadata } from "next";
import { getCurrentUser } from "@/lib/current-user";
import { getUsersProject } from "@/actions/note";
import CreateNewProject from "@/components/modals/create-project";

export const metadata: Metadata = {
  title: "Project",
  description: "Manage your Projects in one clicks",
};

const Projects = async () => {
  const user = await getCurrentUser();

  console.log(user);

  if (!user) console.log("no user");

  const projects = await getUsersProject(user?.id!);

  console.log(projects);

  if (projects?.length === 0)
    return (
      <div className="border-dashed border rounded-md h-full flex flex-col items-center justify-center">
        <h1>You have no project yet that you can work on.</h1>
        <CreateNewProject userId={user?.id!} />
      </div>
    );

  return <div>Projects</div>;
};

export default Projects;
