import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface sidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarItem = ({ href, icon: Icon, label }: sidebarItemProps) => {
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
