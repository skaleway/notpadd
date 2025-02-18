"use client";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import React from "react";
import axios from "axios";

const Page = () => {
  async function gh() {
    await axios.get("/api/auth/github");
  }

  return (
    <div className="min-h-screen  flex flex-col gap-10 items-center justify-center">
      <button className={buttonVariants({ size: "lg" })} onClick={gh}>
        <Icons.github className="size-5" /> <span>Add github</span>
      </button>
    </div>
  );
};

export default Page;
