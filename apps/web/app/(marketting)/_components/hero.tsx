"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 py-20 md:border-x border-border/50 w-full px-4 text-center">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-6xl font-bold font-lora text-center">
          Write the content <span className="block">not the code</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Notpadd helps you set up your write any where, anytime without
          touching your IDE and without sending requests to an external server.
        </p>
      </div>
    </div>
  );
};

export default Hero;
