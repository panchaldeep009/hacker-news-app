import { lazy } from "react";
const TopStories = lazy(() => import('./pages/TopStories'));

export const routes = {
  topStories: {
    title: "Top Stories",
    path: "/top-stories",
    Component: TopStories
  }
} as const;