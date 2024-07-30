import React from "react";
import { Metadata } from "next";
import Account from "./_components/account";
import Customization from "./_components/customization";
import Danger from "./_components/danger";
import { getCurrentUser } from "@/lib/current-user";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your settings in one clicks",
};

const Settings = async () => {
  const user = await getCurrentUser();

  if (!user) return;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-10">
        <Account email={user.email} username={user.username} />
        <Customization />
        <Danger username={user.username} />
      </div>
    </div>
  );
};

export default Settings;
