import { getSingleProject } from "@/actions/note";
import CodeBlock from "@/components/code-block";
import { getCurrentUser } from "@/lib/current-user";
import { Metadata } from "next";
import React from "react";
import Blogs from "./_components/blogs";

type Props = {
  params: { projectId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getCurrentUser();

  if (!user)
    return {
      title: "",
    };
  const project = await getSingleProject(user?.id, params.projectId);

  return {
    title: project?.title,
  };
}

const SingleProject = async ({ params }: { params: { projectId: string } }) => {
  const user = await getCurrentUser();

  if (!user) return;

  const singleProject = await getSingleProject(user.id, params.projectId);

  console.log(singleProject);

  const code = `
  // this values should be used wisely
  NEXT_NOTPADD_USER_ID=${user.id}
  NEXT_NOTPADD_PROJECT_ID=${params.projectId}`;

  return (
    <div className="flex flex-col gap-3">
      <CodeBlock code={code} language="bash" />
      <Blogs userId={user.id} projectId={params.projectId} />
    </div>
  );
};

export default SingleProject;
