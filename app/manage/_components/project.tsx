import { getUsersProject } from "@/actions/note";
import { getCurrentUser } from "@/lib/current-user";
import React from "react";

const Project = async () => {
  const user = await getCurrentUser();

  console.log(user);

  if (!user) console.log("no user");

  const projects = await getUsersProject(user?.id!);

  console.log(projects);

  if (projects?.length === 0)
    return (
      <div className="border-dashed h-full flex flex-col items-center justify-center">
        no Projects
      </div>
    );

  return <div></div>;
};

export default Project;
