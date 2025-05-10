import React from "react";
import Hero from "./hero";
import Header from "./header";
import IntegrationsSection from "./integration";
const LandingPage = () => {
  return (
    <div className="min-h-screen relative z-0 flex flex-col">
      <div className="z-10 flex flex-col gap-y-10">
        <Header />
        <Hero />
        <IntegrationsSection />
      </div>
    </div>
  );
};

export default LandingPage;
