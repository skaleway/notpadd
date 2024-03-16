import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "./toast-provider";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default GlobalProvider;
