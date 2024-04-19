import { useMemo } from "react";

export const sidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: "Projects",
        href: "/manage/projects",
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
