import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Space as SpaceType } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Space = ({ space }: { space: SpaceType }) => {
  return (
    <Card x-chunk="dashboard-01-chunk-0" key={space.id}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 ">
        <Link href={`/manage/spaces/${space.id}`} className="hover:underline">
          <CardTitle className="text-sm font-medium first-letter:capitalize">
            {space.title}
          </CardTitle>
        </Link>
      </CardHeader>
      <p className="line-clamp-1">{space.description}</p>
    </Card>
  );
};

export default Space;
