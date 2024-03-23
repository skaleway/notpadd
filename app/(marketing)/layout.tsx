import React from "react";

import Footer from "@/components/footer";
import { Navbar } from "./_components/navigation";

const MarkettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col ">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MarkettingLayout;
