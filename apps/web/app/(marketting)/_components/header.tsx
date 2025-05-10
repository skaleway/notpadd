"use client";

import Logo from "@/components/logo";
import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
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
        <Logo />
        <div className="flex items-center gap-x-4">
          <Button variant="outline">Login</Button>
          <Button>Sign up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
