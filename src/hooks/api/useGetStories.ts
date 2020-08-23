import { useGet } from 'restful-react';

export const storyTypesOptions = [
  {
    label: 'Top Stories',
    value: 'topstories',
  },
  {
    label: 'New Stories',
    value: 'newstories',
  },
  {
    label: 'Best Stories',
    value: 'beststories',
  },
] as const;

export type StoryType =
  | typeof storyTypesOptions[number]['value']
  | 'askstories'
  | 'showstories'
  | 'jobstories';
export type StoryCategories =
  | StoryType
  | 'askstories'
  | 'showstories'
  | 'jobstories';

export const useGetStories = (limit?: number, types?: StoryCategories) => {
  const { data, ...rest } = useGet<number[]>({
    path: `/${types || 'topstories'}.json`,
  });
  const limitedData = data && [...data].slice(0, limit || 20);
  return { ...rest, data: limitedData, total: data?.length || 0 };
};
