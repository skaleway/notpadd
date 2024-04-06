import { icons } from "lucide-react";
import Link from "next/link";
import React from "react";

interface sidebarItemProps {
  href: string;
  icon: keyof typeof icons;
  label: string;
}

const SidebarItem = ({ href, icon, label }: sidebarItemProps) => {
  const Icon = icons[icon];
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
