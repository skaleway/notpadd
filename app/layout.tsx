import type { Metadata } from "next";
import "./globals.css";
import GlobalProvider from "@/providers";

export const metadata: Metadata = {
  title: {
    default: "Notpadd",
    template: "%s - Notpadd",
  },
  description: "Creating notes and blogs has never been easy",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/notpadd-dark.svg",
        href: "/notpadd-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/notpadd-light.svg",
        href: "/notpadd-light.svg",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
