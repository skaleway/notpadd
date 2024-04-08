import { getSingleProject } from "@/actions/note";
import CodeBlock from "@/components/code-block";
import { getCurrentUser } from "@/lib/current-user";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

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

  const code = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

  return (
    <div className="flex flex-col gap-3">
      <CodeBlock code={code} language="jsx" />
    </div>
  );
};

export default SingleProject;
