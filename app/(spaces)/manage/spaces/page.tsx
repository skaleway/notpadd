import { Metadata } from "next";

import { getUsersSpace } from "@/actions/note";
import { getCurrentUser } from "@/lib/current-user";
import LatestSpace from "../_components/latest-spaces";
import { getSpaceLimit } from "@/lib/space-list";
import { getArticleLimit } from "@/lib/article-list";
export const metadata: Metadata = {
  title: "Space",
  description: "Manage your Spaces in one clicks",
};

const Spaces = async () => {
  const user = await getCurrentUser();

  if (!user) return;

  const spaces = await getUsersSpace(user.id);

  const remainSpaces = await getSpaceLimit(user.id);

  return (
    <div className="h-full flex flex-col gap-3">
      <div className="text-semibold">
        <h1>Spaces</h1>
      </div>
      <LatestSpace spaces={spaces} user={user} remaining={remainSpaces} />
    </div>
  );
};

export default Spaces;
