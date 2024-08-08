import { useMemo } from "react";

export const sidebarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: "Spaces",
        href: "/manage/spaces",
        icon: "BoxSelect",
      },
      {
        label: "Settings",
        href: "/manage/settings",
        icon: "UserCog",
      },
      {
        label: "Bucket",
        href: "/manage/bucket",
        icon: "Folder",
      },
    ],
    []
  );

  return routes;
};
