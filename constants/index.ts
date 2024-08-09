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
        icon: "Settings2",
      },
      {
        label: "Bucket",
        href: "/manage/bucket",
        icon: "ShoppingBasket",
      },
    ],
    []
  );

  return routes;
};

export const MAX_SPACE_FREE_ACCOUNT = 2;
export const MAX_ARTICLE_FREE_ACCOUNT = 5;
export const MAX_SPACE_BASIC_ACCOUNT = 10;
export const MAX_ARTICLE_BASIC_ACCOUNT = 20;
