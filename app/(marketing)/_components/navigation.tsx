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
        "z-50 bg-background flex items-center w-full px-6 py-2.5 top-0 sticky",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-fit flex items-center gap-x-2 ">
        <Link
          className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
          href="/sign-in"
        >
          Log in
          <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
        </Link>
      </div>
    </div>
  );
};
