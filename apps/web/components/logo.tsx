import Link from "next/link";

const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/spaces" : "/"}
      className="hidden md:flex items-center gap-x-2 font-semibold"
    >
      <div className="size-5 rounded-md relative z-0 flex items-center justify-center">
        <div className="size-6 inset-0 absolute bg-primary/70 -z-10 rounded-sm" />
        <div className="size-full rounded-sm bg-primary " />
      </div>
      <span>Notpadd</span>
    </Link>
  );
};

export default Logo;
