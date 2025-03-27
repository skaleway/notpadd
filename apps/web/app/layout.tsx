import { GeistSans } from "geist/font/sans";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${GeistSans.className} antialiased `}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
