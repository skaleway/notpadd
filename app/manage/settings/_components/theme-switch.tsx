"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwtich = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme: userTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Select onValueChange={(e) => setTheme(e)}>
      <SelectTrigger className="w-[250px] bg-muted border-neutral-300  dark:border-neutral-700">
        <SelectValue
          placeholder={userTheme === "light" ? "Light" : "Dark" || "System"}
        />
      </SelectTrigger>
      <SelectContent className="bg-background border border-border">
        <SelectItem className="cursor-pointer" value="light">
          Light
        </SelectItem>
        <SelectItem className="cursor-pointer" value="dark">
          Dark
        </SelectItem>
        <SelectItem className="cursor-pointer" value="system">
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ThemeSwtich;
