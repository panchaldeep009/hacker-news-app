import React, { lazy } from 'react';

const Stories = lazy(() => import('./pages/Stories'));
const StoryView = lazy(() => import('./pages/StoryView'));

export const routes = {
  stories: {
    title: 'Stories',
    path: '/stories',
    Component: () => <Stories category="topstories" />,
  },
  ask: {
    title: 'Ask',
    path: '/ask',
    Component: () => <Stories category="askstories" />,
  },
  shows: {
    title: 'Shows',
    path: '/shows',
    Component: () => <Stories category="showstories" />,
  },
  jobs: {
    title: 'Jobs',
    path: '/jobs',
    Component: () => <Stories category="jobstories" />,
  },
  storyView: {
    title: 'Story View',
    path: '/(stories|ask|shows|jobs)/:id',
    Component: StoryView,
  },
} as const;
