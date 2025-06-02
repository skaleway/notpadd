import { GeistSans } from "geist/font/sans"
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
      <body className={`${GeistSans.className} antialiased `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
