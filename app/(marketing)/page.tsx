import React from "react";

import { getCurrentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import Hero from "./_components/hero";

const LandingPage = async () => {
  const user = await getCurrentUser();

  if (user) return redirect("/manage");

  return <Hero />;
};

export default LandingPage;
