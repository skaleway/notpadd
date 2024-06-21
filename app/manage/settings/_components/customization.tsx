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
        <div className="flex items-center w-full lg:flex-row flex-col space-y-2 lg:space-y-0">
          <div className="lg:flex-1 w-full">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Interface theme
            </p>
          </div>
          <div className="lg:flex-[1.3] w-full space-y-2">
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
