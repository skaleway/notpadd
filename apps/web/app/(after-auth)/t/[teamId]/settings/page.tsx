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

const SettingsPage = () => {
  return (
    <div className="grid gap-6">
      <TeamName />
      <Card x-chunk="dashboard-04-chunk-2">
        <CardHeader>
          <CardTitle>Plugins Directory</CardTitle>
          <CardDescription>
            The directory within your project, in which your plugins are
            located.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Input placeholder="Project Name" defaultValue="/content/plugins" />
            <div className="flex items-center space-x-2">
              <Checkbox id="include" defaultChecked />
              <label
                htmlFor="include"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Allow administrators to change the directory.
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button className="w-fit">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default SettingsPage;
