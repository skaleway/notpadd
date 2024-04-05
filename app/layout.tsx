import type { Metadata } from "next";
import "./globals.css";
import GlobalProvider from "@/providers";
import { getCurrentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

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
  const user = await getCurrentUser();

  if (user) return redirect("/notes");
  return <GlobalProvider>{children}</GlobalProvider>;
}
