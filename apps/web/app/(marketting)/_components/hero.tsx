"use client";

import React from "react";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import demoLight from "@/public/show-case/demo-light.png";
import demoDark from "@/public/show-case/demo-dark.png";

const Hero = () => {
  return (
    <div className="max-w-5xl mx-auto mt-16 py-20 w-full px-4 text-center gap-10 flex flex-col border-y border-border/50 overflow-hidden relative">
      <div className="flex flex-col gap-y-5 items-center">
        <h1 className="text-6xl font-bold font-lora text-center">
          Write the content <span className="block">not the code</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto">
          Notpadd helps you set up your write any where, anytime without
          touching your IDE and without sending requests to an external server.
        </p>
        <div className="flex gap-x-4">
          <Button className="w-fit">Get Started</Button>
          <Button variant="secondary">Get a Demo</Button>
        </div>
      </div>
      <div className="-mb-24 mt w-[90%] h-[600px] border border-border/50 mx-auto rounded-t-3xl p-2 backdrop-blur relative">
        <div className="w-full h-full rounded-t-2xl relative overflow-hidden border">
          <Image
            src={demoLight}
            alt="Hero"
            fill
            className="block dark:hidden"
          />
          <Image src={demoDark} alt="Hero" fill className="hidden dark:block" />
        </div>
        <div className="" />
      </div>
      <div className="absolute h-20 bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-background/50 rounded-t-2xl" />
    </div>
  );
};

export default Hero;
