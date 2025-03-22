import Image from "next/image";
import Link from "next/link";

const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/spaces" : "/"}
      className="hidden md:flex items-center gap-x-2 font-semibold"
    >
      <Image
        src="/notpadd-dark.svg"
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/notpadd-light.svg"
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <span>Notpadd</span>
    </Link>
  );
};

export default Logo;
