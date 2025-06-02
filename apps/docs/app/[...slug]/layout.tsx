import { ModeToggle } from "@/components/mode-toggle"
import { constructMetadata } from "@/lib/utils"
import { Icons } from "@workspace/ui/components/icons"
import { AlignLeft, ChevronDown } from "lucide-react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import SearchBar from "../../components/search-bar"
import { TableOfContents } from "../../components/table-of-contents"
import { DocNavigation } from "../[...slug]/doc-navigation"
import { MobileNavigation } from "./mobile-nav"

export const revalidate = 3600

export interface GitHubResponse {
  stargazers_count: number
}

export const metadata = constructMetadata({
  title: "Notpadd - Build time content, runtime speed",
})

const Layout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="relative min-h-screen w-full container mx-auto antialiased">
      <div className="relative h-full grid  grid-cols-1 lg:grid-cols-[256px_1fr] xl:grid-cols-[256px_1fr_256px]">
        <div className="sticky top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 w-full col-span-full grid grid-cols-1 lg:grid-cols-[256px_1fr] xl:grid-cols-[256px_1fr_256px]">
          <div className="bg-dark-gray/10 h-16">
            <div className="flex items-center justify-between gap-4 h-full px-6 lg:px-4">
              <Link href="/" aria-label="Home" className="flex h-full">
                <div className="flex gap-2 items-center justify-center">
                  <Icons.logo className="size-5 sm:size-6" />
                  <div className="flex items-center gap-1.5">
                    <p className="text-muted-light font-semibold tracking-tight">Notpadd</p>
                    <p className="text-muted-dark">docs</p>
                  </div>
                </div>
              </Link>
              <div className="lg:hidden">
                <SearchBar />
              </div>
            </div>
          </div>

          <div className="px-6 h-16 sm:px-8 border-l border-r border-border/40">
            <div className="hidden lg:flex h-full w-full items-center justify-between">
              <SearchBar />
              <ModeToggle />
            </div>
            <div className="flex text-sm lg:hidden h-full w-full items-center justify-between">
              <MobileNavigation />

              <button className="flex text-muted-dark items-center gap-1.5">
                <AlignLeft className="size-4 text-muted-dark" />
                <p>On this page</p>
                <ChevronDown className="size-4" />
              </button>
            </div>
          </div>

          <div className="h-16 hidden xl:block" />
        </div>

        {/* Content row */}
        <nav className="relative hidden lg:block pt-16 antialiased">
          <div
            className="fixed top-16 max-h-[calc(100vh-4rem)] h-full overflow-y-auto w-[calc(16rem+1px)] pr-4
            scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent hover:scrollbar-thumb-zinc-600"
          >
            <DocNavigation className="py-8" />
          </div>
        </nav>

        <main className="w-full h-full bg-dark-gray/10 sm:border-x border-border/40">
          <div className="max-w-2xl h-full w-full mx-auto pt-44 lg:pt-32 px-6 sm:px-8">
            {children}
          </div>
        </main>

        <nav className="relative px-4 pt-10 hidden xl:block">
          <div className="sticky top-[6.5rem]">
            <TableOfContents />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Layout
