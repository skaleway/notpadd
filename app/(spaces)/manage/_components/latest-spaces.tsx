"use client";

import { Article, Space as SpaceType } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Space from "./space";
import { getUsersSpace } from "@/actions/note";

const LatestSpace = ({
  spaces,
}: {
  spaces: Awaited<ReturnType<typeof getUsersSpace>>;
}) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-2">
      {pathname === "/manage/spaces" ? null : (
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Latest spaces</h1>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3">
        {spaces?.map((space) => (
          <Space space={space} key={space.id} />
        ))}
      </div>
      {pathname === "/manage/spaces" ? null : (
        <div className="flex justify-end">
          <Link
            href="/manage/spaces"
            className="hover:underline flex items-center gap-1 text-muted-foreground text-sm"
          >
            See more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default LatestSpace;
