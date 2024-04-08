"use client";

import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneLight,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "./ui/button";

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
    <div className="max-w-2xl min-w-[25rem]  rounded-md overflow-hidden bg-muted-foreground">
      <div className="flex items-center justify-between px-5 py-2 text-secondary ">
        <p className="text-sm text-white">.env.local</p>

        <button
          className="w-8 h-8 transition-all active:opacity-50 bg-primary-700/5 border  rounded-md flex items-center justify-center"
          onClick={handleCopy}
        >
          {!state ? (
            <Copy className="w-4 h-4" />
          ) : (
            <Check className="w-4 h-4" />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={resolvedTheme === "light" ? oneLight : oneDark}
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
