import { Metadata } from "next";
import LatestProject from "./_components/latest-projects";
import { getCurrentUser } from "@/lib/current-user";
import { getUsersProject } from "@/actions/note";
import { Project } from "@prisma/client";

export const metadata: Metadata = {
  title: "Manage",
  description: "Manage your content in one clicks",
};

const Manage = async () => {
  const user = await getCurrentUser();

  // console.log(user);

  if (!user) return;

  const userProjects = await getUsersProject(user?.id!);

  const projects = userProjects?.slice(0, 3);

  return (
    <div className="flex flex-col gap h-full">
      <LatestProject projects={projects as Project[]} />
    </div>
  );
};

export default Manage;
