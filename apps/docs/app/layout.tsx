import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import React from "react"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

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
