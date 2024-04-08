"use client";

import React from "react";
import ThemeSwtich from "./theme-switch";

const Customization = () => {
  return (
    <div className="p-3 border rounded-lg dark:border-muted-foreground/65">
      <div className="text-xl font-medium">
        <h1>Customization preferences</h1>
        <p className="text-sm font-normal">Potentially destructive actions.</p>
      </div>
      <div className="flex justify-between items-center mt-10">
        <h1>Theme </h1>
        <ThemeSwtich />
      </div>
    </div>
  );
};

export default Customization;
