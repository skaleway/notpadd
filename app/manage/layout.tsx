import Sidebar from "./_components/sidebar";
import React, { ReactNode } from "react";
import Header from "./_components/header";

const MangeLayout = ({ children }: { children: ReactNode }) => (
  <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] border-2 border-black">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </div>
  </div>
);

export default MangeLayout;
