"use client";

import { Project as ProjectType } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Project from "./project";

const LatestProject = ({ projects }: { projects: ProjectType[] }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {pathname === "/manage/spaces" ? null : (
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Latest projects</h1>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      {pathname === "/manage/spaces" ? null : (
        <div className="flex justify-end">
          <Link
            href="/manage/spaces"
            className="hover:underline flex items-center gap-1 text-muted-foreground text-sm"
          >
            See more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default LatestProject;
