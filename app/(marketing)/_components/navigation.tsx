"use client";

import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Logo from "@/components/logo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  const scrolled = useScrollToTop();

  return (
    <div
      className={cn(
        "z-10 bg-background flex items-center w-full px-6 py-2.5 top-0 fixed bg left-0",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="mx-auto max-w-7xl w-full flex items-center">
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-fit flex items-center gap-x-2 ">
          <Link
            className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-200  dark:text-zinc-900 bg-gradient-to-r dark:from-white/80 from-black/80 via-black to-black/80 dark:via-white dark:to-white/80 hover:bg-zinc-400 group"
            href="/sign-in"
          >
            Log in
            <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
