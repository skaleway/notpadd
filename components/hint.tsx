import React, { ReactNode } from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface HintProps {
  children: ReactNode;
  description: string;
  side?: "left" | "right";
  sideOffset?: number;
}

const Hint = ({ children, description, side, sideOffset }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          className="text-xs max-w-[220px] break-words"
        >
          {description}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Hint;
