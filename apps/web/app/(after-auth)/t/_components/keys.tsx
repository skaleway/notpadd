"use client";

import { ReactNode, useState } from "react";

import KeysForm from "@/components/forms/keys-form";
import { useTeams } from "@/hooks/use-team";
import { Space } from "@workspace/db";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { toast } from "sonner";

const Keys = ({ space, children }: { space: Space; children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { teamId } = useTeams();

  const codeSnippet = `import { createNotpaddConfig } from "notpadd";

export const notpadd = async () =>
  await createNotpaddConfig({
    publicKey: "${space.id}",
    secreteKey: "${teamId}",
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
          {/* @ts-ignore */}
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
            showLineNumbers
          >
            {codeSnippet}
          </SyntaxHighlighter>
          <Button
            className="absolute top-2 right-2 text-white"
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
        <KeysForm space={space} />
      </SheetContent>
    </Sheet>
  );
};

export default Keys;
