import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const borderVariants = cva(
  "absolute bg-[linear-gradient(to_right,hsl(var(--background)),hsl(var(--border))_200px,hsl(var(--border))_calc(100%-200px),hsl(var(--background)))] h-px w-full",
  {
    variants: {
      position: {
        top: "top-0",
        bottom: "bottom-0",
        left: "left-0 w-px h-full",
        right: "right-0 w-px h-full",
      },
      variant: {
        header:
          "bg-[linear-gradient(to_right,hsl(var(--background)),hsl(var(--border))_200px,hsl(var(--border))_calc(100%-200px),hsl(var(--background)))]",
        sm: "bg-[linear-gradient(to_right,hsl(var(--background)),hsl(var(--border))_100px,hsl(var(--border))_calc(100%-100px),hsl(var(--background)))]",
      },
    },
    defaultVariants: {
      position: "bottom",
      variant: "header",
    },
  },
);

const Border = ({ position }: VariantProps<typeof borderVariants>) => {
  return <div className={cn(borderVariants({ position }))} />;
};

export default Border;
