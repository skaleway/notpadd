"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="group h-10 w-10 hover:bg-muted rounded-lg flex items-center justify-center"
    >
      <ArrowLeft className="w-5 h-5 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
      <span className="sr-only">Go back</span>
    </button>
  );
};

export default GoBack;
