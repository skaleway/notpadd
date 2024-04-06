import { Grid, Home } from "lucide-react";
import { useMemo } from "react";

export const sidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: "Manage",
        href: "/manage",
        icon: Grid,
      },
      {
        label: "Apply",
        href: "/apply",
        icon: Grid,
      },
      {
        label: "FAQ",
        href: "/faq",
        icon: Grid,
      },
      {
        label: "Contact",
        href: "/contact",
        icon: Grid,
      },
    ],
    []
  );

  return routes;
};
