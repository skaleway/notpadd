import { Home } from "lucide-react";
import { useMemo } from "react";

export const sidebarRoutes = useMemo(() => {
  const routes = [
    {
      label: "Home",
      icon: Home,
      href: "/manage",
    },
    {
      label: "Home",
      icon: Home,
      href: "/manage",
    },
    {
      label: "Home",
      icon: Home,
      href: "/manage",
    },
    {
      label: "Home",
      icon: Home,
      href: "/manage",
    },
  ];

  return routes;
}, []);
