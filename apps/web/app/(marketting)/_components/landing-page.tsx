import React from "react";
import Hero from "./hero";
import Header from "./header";
import IntegrationsSection from "./integration";
import FeaturesSection from "./features";
import CallToAction from "./cta";
const LandingPage = () => {
  return (
    <div className="min-h-screen relative z-0 flex flex-col">
      <div className="z-10 flex flex-col">
        <Header />
        <Hero />
        <div className="relative z-10 flex flex-col gap-y-10 py-10">
          <IntegrationsSection />
          <FeaturesSection />
          <CallToAction />
          <div
            className="absolute max-w-5xl mx-auto inset-0  border-x border-border/50
           -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
