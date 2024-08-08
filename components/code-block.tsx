"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
  dracula,
  dark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [state, setState] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setState(true);

    setTimeout(() => {
      setState(false);
    }, 3000);
  };

  return (
    <div className="max-w-2xl min-w-[25rem]  rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-5 py-2 text-secondary bg-muted-foreground dark:bg-[#232323] ">
        <p className="text-sm text-white font-semibold">.env.local/headers</p>

        <Button variant="ghost" size="icon" onClick={handleCopy}>
          {!state ? (
            <Copy className="w-4 h-4 text-neutral-200" />
          ) : (
            <Check className="w-4 h-4 text-neutral-200" />
          )}
        </Button>
      </div>
      <SyntaxHighlighter
        language={language}
        customStyle={{
          margin: "0px",
          borderRadius: "0px",
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
