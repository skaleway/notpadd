import React from "react";
import { Metadata } from "next";

import { getCurrentUser } from "@/lib/current-user";
import { getUsersSpace } from "@/actions/note";
import CreateNewSpace from "@/components/modals/create-space";
import LatestSpace from "../_components/latest-spaces";

export const metadata: Metadata = {
  title: "Space",
  description: "Manage your Spaces in one clicks",
};

const Spaces = async () => {
  const user = await getCurrentUser();

  if (!user) return;

  const spaces = await getUsersSpace(user.id);

  if (spaces?.length === 0) {
    return (
      <div className="border-dashed border rounded-md h-full flex flex-col items-center justify-center gap-8">
        <h1>You have no space yet that you can work on.</h1>
        <CreateNewSpace userId={user?.id!} />
      </div>
    );
  } else {
    return (
      <div className="h-full flex flex-col gap-3">
        <div className="text-semibold">
          <h1>Spaces</h1>
        </div>
        <LatestSpace spaces={spaces} />
      </div>
    );
  }
};

export default Spaces;
