import React from "react";
import Hero from "./hero";
import Header from "./header";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-y-10 min-h-screen relative z-0">
      <div className="z-10">
        <Header />
        <Hero />
      </div>
      <div className="fixed h-screen max-w-5xl w-full mx-auto left-0 right-0 border-x border-border/50"></div>
    </div>
  );
};

export default LandingPage;
