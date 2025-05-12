"use client";

import Logo from "@/components/logo";
import { marketingLinks } from "@/constants";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full h-16 border-b bg-background z-50 border-transparent transition-all duration-300",
        isActive && "border-border/50"
      )}
    >
      <nav className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-x-10">
          <Logo />
          <ul className="flex items-center gap-x-4">
            {marketingLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
