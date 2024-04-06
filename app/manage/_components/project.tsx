import { getUsersProject } from "@/actions/note";
import { getCurrentUser } from "@/lib/current-user";
import React from "react";

const Project = async () => {
  const user = await getCurrentUser();

  console.log(user);

  if (!user) console.log("no user");

  const projects = await getUsersProject(user?.id!);

  return <div></div>;
};

export default Project;
