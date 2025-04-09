"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useIsMounted } from "usehooks-ts";

export function Providers({ children }: { children: React.ReactNode }) {
  const mouted = useIsMounted();

  const queryClient = new QueryClient();

  if (!mouted || typeof window === "undefined") return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
        <Toaster />
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
