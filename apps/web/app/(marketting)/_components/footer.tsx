"use client";

import { Button } from "@workspace/ui/components/button";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { marketingLinks } from "@/constants";
import ModeToggle from "./mode-toggle";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <footer className="border-t border-border/50 font-inter flex flex-col gap-10 relative">
      <div className=" max-w-5xl px-6 container">
        <div className="flex flex-col md:flex-row divide-x divide-border/30 gap-x-20 w-full">
          <div className="pt-20 md flex-1 flex flex-col gap-20 w-1/2">
            <div className="flex flex-col gap-4 md:max-w-md">
              <Logo />
              <p className="text-lg text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="w-fit">
                Contact us
              </Button>
              <Button size="lg" variant="secondary">
                Refer us{" "}
              </Button>
            </div>
          </div>
          <div className="pt-20 flex-1 flex flex-col gap-20 !w-1/2 pl-20">
            <div className="flex gap-40">
              <ul className="flex flex-col gap-4">
                {marketingLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-lg font-medium capitalize text-muted-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Made with 🩶 by {siteConfig.links.author} with some components
                from{" "}
                <Link
                  href={siteConfig.links.tailark}
                  target="_blank"
                  className="hover:text-black font-medium underline"
                >
                  Tailark
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl flex items-center justify-between pb-20">
        <p className="text-sm text-blue-500 font-medium selection:bg-blue-500 selection:text-white text-black/60 text-center flex items-center gap-x-2">
          <div className="size-1.5 rounded-full bg-blue-500" />
          <span>All System Normal </span>
        </p>
        <ModeToggle />
      </div>
      <div className="border-dashed border-x border-border/30 absolute inset-0 max-w-5xl container pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
