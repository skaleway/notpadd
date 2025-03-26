import { getCurrentUser } from "@/lib/current-user";
import React, { ReactNode } from "react";

const AfterAuthLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return <div>loading...</div>;
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AfterAuthLayout;
