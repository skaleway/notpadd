import { getNotesPerProject } from "@/actions/note";
import CreateNewArticle from "@/components/modals/create-article";
import Link from "next/link";
import React from "react";

const Blogs = async ({
  userId,
  projectId,
}: {
  userId: string;
  projectId: string;
}) => {
  const contents = await getNotesPerProject(userId, projectId);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-medium flex items-center justify-between">
        <h1>Recent to oldest articles</h1>
        <CreateNewArticle userId={userId} projectId={projectId} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {contents?.map((content) => {
          return (
            <Link
              href={`/manage/projects/${projectId}/${content.id}`}
              key={content?.id}
              className="border p-3 rounded-lg group"
            >
              <h2 className="group-hover:underline">{content.title}</h2>
              <p>{content.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
