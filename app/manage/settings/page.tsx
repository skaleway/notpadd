import React from "react";
import { Metadata } from "next";
import Account from "./_components/account";
import Customization from "./_components/customization";
import Danger from "./_components/danger";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your settings in one clicks",
};

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl font-semibold">
        <h1>Settings</h1>
      </div>

      <div className="flex flex-col gap-2">
        <Account />
        <Customization />
        <Danger />
      </div>
    </div>
  );
};

export default Settings;
