import { removeArticleBg } from "@/actions/note";
import { Button } from "@/components/ui/button";
import { Article } from "@prisma/client";
import { Trash } from "lucide-react";
import React from "react";

const TrashImage = ({ article }: { article: Article }) => {
  return (
    <div className="absolute top-4 right-4">
      <form
        action={async () => {
          await removeArticleBg(article.key!, article.id);
        }}
      >
        <Button
          size="icon"
          variant="destructive"
          disabled={article.displayImage ? false : true}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default TrashImage;
