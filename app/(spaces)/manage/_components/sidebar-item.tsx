import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface sidebarItemProps {
  href: string;
  icon: keyof typeof icons;
  label: string;
}

const SidebarItem = ({ href, icon, label }: sidebarItemProps) => {
  const pathname = usePathname();

  const path = pathname.split("/")[2];

  const Icon = icons[icon];
  const isActive = pathname === href || href.includes(path);
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        {
          "bg-muted text-primary": isActive,
        }
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
