import { lazy } from 'react';

const Stories = lazy(() => import('./pages/Stories'));

export const routes = {
  stories: {
    title: 'Stories',
    path: '/stories',
    Component: Stories,
  },
  ask: {
    title: 'Ask',
    path: '/ask',
    Component: Stories,
  },
  shows: {
    title: 'Shows',
    path: '/shows',
    Component: Stories,
  },
  jobs: {
    title: 'Jobs',
    path: '/jobs',
    Component: Stories,
  },
} as const;
