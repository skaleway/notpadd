import type { Metadata } from "next";
import "./globals.css";
import GlobalProvider from "@/providers";

export const metadata: Metadata = {
  title: {
    default: "Notpadd",
    template: "%s - Notpadd",
  },
  description: "Creating notes and blogs has never been easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
