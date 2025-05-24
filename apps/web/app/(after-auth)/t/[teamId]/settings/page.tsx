import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import React from "react";
import TeamName from "./_component/team-name";
import Avatar from "./_component/avatar";

const SettingsPage = () => {
  return (
    <div className="grid gap-6">
      <Avatar />
      <TeamName />
    </div>
  );
};
export default SettingsPage;
