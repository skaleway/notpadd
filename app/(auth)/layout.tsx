import Logo from "@/components/logo";
import { getCurrentUser } from "@/lib/current-user";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (user) return redirect("/manage/projects");

  return (
    <div className="w-full flex min-h-screen ">
      <div className="p-10 flex flex-col flex-[.3] border-r border">
        <Logo />
        <div className="gap-6 w-full flex items-center h-full">{children}</div>
      </div>
      <div className="hiddenlg:block lg:flex-[.7] dark:bg-[#161616] bg-muted"></div>
    </div>
  );
};

export default AuthLayout;
