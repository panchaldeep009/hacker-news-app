import { lazy } from "react";
const HomePage = lazy(() => import('./pages/Home'));

export const routes = [
  {
    title: "Home",
    path: "/",
    Component: HomePage
  }
] as const;