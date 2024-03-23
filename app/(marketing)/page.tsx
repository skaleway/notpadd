import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GetStarted } from "@/components/get-started";

const Hero = () => {
  return (
    <section
      className="center flex-col space-y-4 pt-24 w-full bg-[url('/grid.svg')]"
      id="hero"
    >
      <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl leading-10">
        Create your notes <br />
        in seconds not hours
      </h1>
      <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl lg:text-xl dark:text-foreground/80">
        Unleash your creativity, boost your productivity, and organize your
        thoughts like never before with Notpadd.
      </p>
      <Link href="/home" className="center-y space-x-3">
        <GetStarted />
      </Link>
      <div className="w-full bg-gradient-to-b from-transparent to-white dark:to-background h-24" />
    </section>
  );
};

export default Hero;
