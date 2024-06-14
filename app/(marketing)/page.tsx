import React from "react";

import { getCurrentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import Hero from "./_components/hero";
import TheTool from "./_components/thetool";
// import { LayoutGridDemo } from "./_components/bento";
import Pricing from "./_components/pricing";

const LandingPage = async () => {
  const user = await getCurrentUser();

  if (user) return redirect("/manage");

  return (
    <>
      <Hero />
      <TheTool />
      <Pricing />
    </>
  );
};

export default LandingPage;
