import React from "react";
import Hero from "./hero";
import Header from "./header";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-10 min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default LandingPage;
