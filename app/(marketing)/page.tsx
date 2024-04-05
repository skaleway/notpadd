import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GetStarted } from "@/components/get-started";

const Hero = () => {
  return (
    <section
      className="center flex-col space-y-4 pt-24 w-full bg-[url('/grid.svg')] relative"
      id="hero"
    >
      <GetStarted>
        {/* <div className="relative inline-flex before:absolute before:inset-0 "> */}
        <Link
          className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
          href="https://github.com/code-env/notpadd"
          target="_blank"
        >
          <span className="relative inline-flex items-center">
            Notpadd is Open Source{" "}
            <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
          </span>
        </Link>
        {/* </div> */}
      </GetStarted>
      <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl leading-10">
        Create your notes <br />
        in seconds not hours
      </h1>
      <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl lg:text-xl dark:text-foreground/80">
        Unleash your creativity, boost your productivity, and organize your
        thoughts like never before with Notpadd.
      </p>
      <div
        className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <Link
          className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
          href="/overview"
        >
          Get Started
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </Link>
      </div>
      <div className="w-full bg-gradient-to-b from-transparent to-white dark:to-background h-24" />
      <div className="bg-gradient-to-l from-transparent to-white dark:to-background h absolute left-0 -top-4 h-full w-24" />
      <div className="bg-gradient-to-r from-transparent to-white dark:to-background  absolute right-0 -top-4 h-full w-24" />
      <div className="bg-gradient-to-t from-transparent to-white dark:to-background  absolute  -top-4  w-full h-16" />
    </section>
  );
};

export default Hero;
