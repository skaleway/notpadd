import { getCurrentUser } from "@/lib/current-user";
import { SessionProvider } from "@/provider/session";
import React, { ReactNode } from "react";

const AfterAuthLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return <div>loading...</div>;
  return (
    <SessionProvider value={{ user }}>
      <div className="min-h-screen flex items-center justify-center">
        {children}
      </div>
    </SessionProvider>
  );
};

export default AfterAuthLayout;
