import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Project as ProjectType } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0" key={project.id}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
        <Link
          href={`/manage/projects/${project.id}`}
          className="hover:underline"
        >
          <CardTitle className="text-sm font-medium first-letter:capitalize">
            {project.title}
          </CardTitle>
        </Link>
      </CardHeader>
      <p className="line-clamp-1">{project.description}</p>
    </Card>
  );
};

export default Project;
