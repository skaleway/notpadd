"use client";

import React, { useEffect, useState } from "react";

import Logo from "./logo";
import { Cable, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Wordmark } from "./footer-watermark";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme: userTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themes = [
    {
      name: "light",
      icon: Sun,
    },
    {
      name: "dark",
      icon: Moon,
    },
    {
      name: "system",
      icon: Cable,
    },
  ];

  if (!isMounted) return null;

  return (
    <footer className=" flex-1 flex items-end">
      <div className="h-full py-20  center-y w-full  px-4 md:px-8">
        <div className="flex flex-col w-full">
          <div className="flex between ">
            <div className="center-y gap-4">
              <Logo />
              <p>&copy; {new Date().getFullYear()}</p>
            </div>

            <ul className="center-y gap-5">
              {themes.map((theme) => {
                //some code here

                return (
                  <li
                    key={theme.name}
                    className={cn(
                      "h-6 w-6 center hover:bg-foreground/50 hover:text-white cursor-pointer rounded-full transition-all duration-300",
                      {
                        "bg-foreground/50 text-white": userTheme === theme.name,
                      }
                    )}
                    onClick={() => setTheme(theme.name)}
                  >
                    <theme.icon className="w-4 h-4" />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center">
            <p className="dark:text-gray-500 space-x-2 w-full">
              made by{" "}
              <Link
                href="https://github.com/code-env"
                target="_blank"
                className="transition duration-300 hover:underline"
              >
                @code-env
              </Link>
              <span>and</span>
              <Link
                href="https://github.com/romaric250"
                target="_blank"
                className="transition duration-300 hover:underline"
              >
                @romaric
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <Wordmark /> */}
    </footer>
  );
};

export default Footer;
