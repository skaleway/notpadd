import { Icons } from "@workspace/ui/components/icons";
import Link from "next/link";

const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/spaces" : "/"}
      className="flex items-center gap-x-2 font-semibold"
    >
      <Icons.logo className="size-5" />

      <span className="hidden md:block">Notpadd</span>
    </Link>
  );
};

export default Logo;
