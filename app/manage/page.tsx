import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import LatestProject from "./_components/latest-projects";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/current-user";
import { getUsersProject } from "@/actions/note";
import { Project } from "@prisma/client";

export const metadata: Metadata = {
  title: "Manage",
  description: "Manage your content in one clicks",
};

const Manage = async () => {
  const user = await getCurrentUser();

  console.log(user);

  if (!user) console.log("no user");

  const userProjects = await getUsersProject(user?.id!);

  const projects = userProjects?.slice(0, 4);

  console.log(projects);

  return (
    <div className="flex flex-col gap h-full">
      <LatestProject projects={projects as Project[]} />
    </div>
  );
};

export default Manage;
