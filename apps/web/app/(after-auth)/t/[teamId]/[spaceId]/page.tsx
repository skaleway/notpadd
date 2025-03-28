import { db } from "@workspace/db";
import { notFound } from "next/navigation";
import React from "react";
import SpaceHeaderAction from "../../_components/space-actions";
import Articles from "../../_components/articles";

type Props = {
  params: Promise<{ spaceId: string }>;
};

const Space = async ({ params }: Props) => {
  const { spaceId } = await params;

  const space = await db.space.findUnique({
    where: {
      id: spaceId,
    },
  });

  if (!space) return notFound();

  return (
    <div className="flex flex-col gap-10">
      <div className="h-16 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-medium">Articles</h1>
          <p className="text-muted-foreground text-lg">
            Manage your articles in a simple and intuitive interface
          </p>
        </div>
        <SpaceHeaderAction space={space} />
      </div>
      <Articles space={space} />
    </div>
  );
};

export default Space;
