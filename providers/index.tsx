import React, { ReactNode } from "react";
import { Toaster } from "./toast-provider";
import { ThemeProvider } from "./theme-provider";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default GlobalProvider;
