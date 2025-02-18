import React from "react";
import Link from "next/link";
import { Icons } from "./icons";

interface LogoProps {
  path?: string;
}

const Logo = ({ path }: LogoProps) => {
  return (
    <Link href={path ?? "/"}>
      <Icons.logo />
    </Link>
  );
};

export default Logo;
