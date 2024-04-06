import { useMemo } from "react";

export const sidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: "Manage",
        href: "/manage",
        icon: "Boxes",
      },
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
      {
        label: "Feedback",
        href: "/manage/feedback",
        icon: "MessageSquareHeart",
      },
    ],
    []
  );

  return routes;
};
