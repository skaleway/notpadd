"use client";

import { ReactNode, useState } from "react";

import { Space } from "@workspace/db";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";
import { Button } from "@workspace/ui/components/button";
import { Check, Copy } from "lucide-react";

const keys = ({ space, children }: { space: Space; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    spaceSecret: "${space.id}",
    outputDir: "content",
    publishOnly: true,
  });
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    toast.success("Code copied to clipboard");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col gap-10">
        <SheetHeader>
          <SheetTitle>Keys</SheetTitle>
          <SheetDescription>
            Use this in{" "}
            <span className="border rounded-md text-sm px-2 py-1 bg-muted/50">
              notpadd.config.ts
            </span>
          </SheetDescription>
        </SheetHeader>
        <div className="relative code-block">
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
            customStyle={{
              borderRadius: "5px",
              margin: 0,
              padding: "1rem",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
          <Button
            className="absolute top-2 right-2 text-primary"
            variant="ghost"
            onClick={handleCopy}
            size="icon"
          >
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            <span className="sr-only">Copy</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default keys;
