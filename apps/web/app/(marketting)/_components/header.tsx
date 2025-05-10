"use client";

import Logo from "@/components/logo";
import { Button } from "@workspace/ui/components/button";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 border-border/50">
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
