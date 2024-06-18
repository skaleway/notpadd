import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";

const TrashImage = () => {
  return (
    <div className="absolute top-4 right-4">
      <Button size="icon" variant="destructive">
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TrashImage;
