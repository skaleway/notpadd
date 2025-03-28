import { db } from "@workspace/db";
import { notFound } from "next/navigation";
import React from "react";

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

  return <div>Space</div>;
};

export default Space;
