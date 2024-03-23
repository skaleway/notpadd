import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "./toast-provider";
import { ThemeProvider } from "./theme-provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default GlobalProvider;
