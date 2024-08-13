import { getUsersSpace } from "@/actions/note";
import Hint from "@/components/hint";
import { MAX_SPACE_BASIC_ACCOUNT, MAX_SPACE_FREE_ACCOUNT } from "@/constants";
import { useSpaceModal } from "@/hooks/use-space-modal";
import { User } from "@prisma/client";
import { HelpCircle } from "lucide-react";
import Space from "./space";

interface LatestSpaceProps {
  spaces: Awaited<ReturnType<typeof getUsersSpace>>;
  user: User;
  remaining: number;
}

const LatestSpace = ({ spaces, user, remaining }: LatestSpaceProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-3">
        {spaces?.map((space) => (
          <Space space={space} key={space.id} user={user} />
        ))}
        <CreateSpace remaining={remaining} user={user} />
      </div>
    </div>
  );
};

function CreateSpace({ remaining, user }: { remaining: number; user: User }) {
  const { onOpen } = useSpaceModal();

  let remainSpaces =
    (user.accounttype === "Free" && MAX_SPACE_FREE_ACCOUNT) ||
    (user.accounttype === "Basic" && MAX_SPACE_BASIC_ACCOUNT) ||
    0;

  return (
    <div
      onClick={onOpen}
      className="cursor-pointer bg-muted p-3 rounded-lg border relative h-[142.246px] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-lg text-muted-foreground ">
          Create space
        </h1>
        <p className="text-sm text-muted-foreground/80">
          A space is unique for each env
        </p>
        <span className="text-sm text-muted-foreground/80">
          {remainSpaces - remaining} remaining
        </span>
      </div>
      <Hint description="">
        <HelpCircle className="absolute bottom-2 right-2 max-h-3.5 w-3.5" />
      </Hint>
    </div>
  );
}

export default LatestSpace;
