import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import React from "react"
import { Icons } from "@workspace/ui/components/icons"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Notpadd Docs",
    template: "%s | Notpadd Docs",
  },
  icons: {
    icon: [
      {
        url: "/logo-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-light.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} ${GeistMono.variable} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
