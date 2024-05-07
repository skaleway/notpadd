import { getSingleProject } from "@/actions/note";
import CodeBlock from "@/components/code-block";
import { getCurrentUser } from "@/lib/current-user";
import { Metadata } from "next";
import React from "react";
import Blogs from "./_components/blogs";
import UserNotFound from "@/components/not-found/user";
import { Button } from "@/components/ui/button";

type Props = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getCurrentUser();

  if (!user)
    return {
      title: "User not found",
    };

  const project = await getSingleProject(user?.id, params.projectId);

  if (!project)
    return {
      title: "Not found",
    };

  const title = project.title.charAt(0).toUpperCase() + project.title.slice(1);

  return {
    title: title,
  };
}

const SingleProject = async ({ params }: { params: { projectId: string } }) => {
  const user = await getCurrentUser();

  if (!user) return <UserNotFound />;

  // const singleProject = await getSingleProject(user.id, params.projectId);

  // console.log(singleProject);

  const code = `
  // this values should be used wisely
  NEXT_NOTPADD_USER_ID=${user.id}
  NEXT_NOTPADD_PROJECT_ID=${params.projectId}`;

  return (
    <div className="flex flex-col gap-3">
      <button className="bg-black text-white w-fit p-2 rounded-md" >.env.local</button>

      <CodeBlock code={code} language="bash" />
      <Blogs userId={user.id} projectId={params.projectId} />
    </div>
  );
};

export default SingleProject;
