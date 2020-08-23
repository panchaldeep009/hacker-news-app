import { lazy } from "react";
const TopStories = lazy(() => import('./pages/TopStories'));

export const routes = [
  {
    title: "Top Stories",
    path: "/",
    Component: TopStories
  }
] as const;