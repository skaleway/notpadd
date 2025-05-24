import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Upload } from "lucide-react";

const Avatar = () => {
  return (
    <Card className="flex flex-col p-0 relative">
      <div className="flex items-center justify-between">
        <CardHeader className="p-6 flex flex-col gap-2">
          <CardTitle>Avatar</CardTitle>
          <CardDescription className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              This is your team&apos;s avatar.
            </span>
            <span>
              Click on the avatar to upload a custom one from your files.
            </span>
          </CardDescription>
        </CardHeader>
        <div className="size-20 min-w-20 bg-muted dark:bg-muted/50 rounded-md mr-6"></div>
      </div>
      <div className="absolute top-4 right-4"></div>
      <CardFooter className="border-t pt-6">
        <p className="text-sm text-muted-foreground">
          An avatar is optional but strongly recommended.
        </p>
      </CardFooter>
    </Card>
  );
};

export default Avatar;
