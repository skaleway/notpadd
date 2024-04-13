import type { Metadata, Viewport } from "next";
import "./globals.css";
import GlobalProvider from "@/providers";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Notpadd",
    template: " %s | Notpadd",
  },

  description: "Create blogging articles in minutes not hours.",
  icons: {
    icon: [
      { url: "/notpadd-light.png", media: "(prefers-color-scheme: dark)" },
      { url: "/notpadd-dark.png", media: "(prefers-color-scheme: light)" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <GlobalProvider>{children}</GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
