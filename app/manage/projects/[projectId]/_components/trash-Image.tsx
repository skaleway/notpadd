import { Button } from "@/components/ui/button";
import { Article } from "@prisma/client";
import { Trash } from "lucide-react";
import React from "react";

const TrashImage = ({ article }: { article: Article }) => {
  return (
    <div className="absolute top-4 right-4">
      <Button
        size="icon"
        variant="destructive"
        disabled={article.displayImage ? false : true}
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TrashImage;
