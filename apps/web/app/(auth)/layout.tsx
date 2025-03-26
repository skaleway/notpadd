import Logo from "@/components/logo";
import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex justify-start w-[355.98px] mx-auto">
        <Logo />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
