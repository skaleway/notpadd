import { Icons } from "@workspace/ui/components/icons"
import Link from "next/link"
import { siteConfig } from "@/lib/site"
const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/spaces" : "/"}
      className="flex items-center gap-x-2 font-semibold"
    >
      <Icons.logo className="size-5" />
      <span className="hidden md:block">{siteConfig.name}</span>
    </Link>
  )
}

export default Logo
