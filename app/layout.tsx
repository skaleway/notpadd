import type { Metadata } from "next";
import "./globals.css";
import GlobalProvider from "@/providers";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

const satoshi = localFont({
  src: "../fonts/Satoshi-Regular.woff2",
  display: "swap",
});

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
        <body className={satoshi.className}>
          <GlobalProvider>{children}</GlobalProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
