import { useMemo } from "react";

export const sidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: "Spaces",
        href: "/manage/spaces",
        icon: "MemoryStick",
      },
      {
        label: "Settings",
        href: "/manage/settings",
        icon: "UserCog",
      },
    ],
    []
  );

  return routes;
};
