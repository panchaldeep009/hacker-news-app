import { lazy } from 'react';

const Stories = lazy(() => import('./pages/Stories'));

export const routes = {
  topStories: {
    title: 'Stories',
    path: '/stories',
    Component: Stories,
  },
} as const;
