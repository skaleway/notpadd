import Sidebar from "./_components/sidebar";
import React, { ReactNode } from "react";
import Header from "./_components/header";
import { getCurrentUser } from "@/lib/current-user";

const MangeLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return;

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <div className="flex flex-1 h-full lg:max-w-7xl w-full mx-auto">
        <Sidebar />
        <main className="flex flex-[3] flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MangeLayout;
