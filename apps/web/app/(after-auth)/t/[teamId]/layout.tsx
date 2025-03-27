import React, { ReactNode } from "react";

const TeamLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ teamId: string }>;
}) => {
  const { teamId } = await params;

  return <div>TeamLayout</div>;
};

export default TeamLayout;
