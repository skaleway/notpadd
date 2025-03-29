import CreateNewArticle from "@/components/modal/create-article";
import { Space } from "@workspace/db";
import { Button } from "@workspace/ui/components/button";
import { KeySquare, PlusCircle } from "lucide-react";

const SpaceHeaderAction = ({ space }: { space: Space }) => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary">
        <KeySquare className="size-4 mr-3" /> Keys
      </Button>
      <CreateNewArticle spaceId={space.id}>
        <Button>
          <PlusCircle className="size-4 mr-2" />
          Create Article
        </Button>
      </CreateNewArticle>
    </div>
  );
};

export default SpaceHeaderAction;
