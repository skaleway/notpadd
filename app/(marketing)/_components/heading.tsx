import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  title,
  description,
  subscription,
  isAuth,
}: {
  title: string;
  description: string;
  subscription?: string;
  isAuth?: boolean;
}) => {
  return (
    <div
      className={cn("flex flex-col gap-4 mb-20 mx-auto w-fit text-center", {
        "text-start gap-2 mx-0 mb-10": isAuth,
      })}
    >
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div>
        <p className="text-base text-neutral-500">{description}</p>
        <p className="text-base text-neutral-500">{subscription}</p>
      </div>
    </div>
  );
};

export default Heading;
