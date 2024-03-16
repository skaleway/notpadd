"use client";

import { Toaster as Toast } from "sonner";

export const Toaster = () => {
  return (
    <Toast
      position="bottom-right"
      toastOptions={{
        style: {
          background: "white",
          color: "black",
          // border: "",
        },
      }}
    />
  );
};
