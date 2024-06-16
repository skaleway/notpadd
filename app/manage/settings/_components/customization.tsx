"use client";

import React from "react";
import ThemeSwtich from "./theme-switch";

const Customization = () => {
  return (
    <div className="border rounded-lg dark:bg-[#232323] dark:border-neutral-700 overflow-hidden">
      <div className="text- font-medium">
        <h1 className=" border-b py-3 px-5 dark:border-neutral-700 text-base">
          Theme
        </h1>
      </div>
      <div className="flex justify py-3 px-5">
        <div className="flex items-center w-full">
          <div className="flex-1 ">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Interface theme
            </p>
          </div>
          <div className="flex-[1.3] space-y-2">
            <ThemeSwtich />
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Choose a theme preference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customization;
