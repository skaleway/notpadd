"use client";

import { Button } from "@workspace/ui/components/button";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/logo";
import { marketingLinks } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const routes = [
    {
      name: "Customer Stories",
      href: "/customer-stories",
    },
    {
      name: "Terms",
      href: "/terms",
    },
    {
      name: "404",
      href: "/404",
    },
  ];

  const [hovered, setHovered] = useState(false);
  return (
    <footer className="border-t border-black/5 font-inter flex flex-col gap-20">
      <div className=" max-w-5xl px-6 container">
        <div className="flex flex-col md:flex-row ">
          <div className="pt-20 md:border-r border-black/5 flex-1 flex flex-col gap-20">
            <div className="flex flex-col gap-4 md:max-w-md">
              <Logo />
              <p className="text-black/80 text-lg">{siteConfig.description}</p>
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
          <div className="pt-20 flex-1 sm:pl-20 flex flex-col gap-20">
            <div className="flex gap-40">
              <ul className="flex flex-col gap-4">
                {marketingLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-lg font-medium capitalize text-black/80"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-4">
                {routes.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-lg text-black/80 capitalize font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-black/80">
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
      <div className="container flex items-center justify-center pb-20">
        <p className="md:text-lg text-sm text-black/60 text-center">
          © Copyright {currentYear}, All Rights Reserved by {siteConfig.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
