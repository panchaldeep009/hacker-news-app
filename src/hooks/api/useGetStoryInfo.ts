import { useGet } from 'restful-react';

export interface StoryInfo {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
  text?: string;
}

export const useGetStoryInfo = (id: number) =>
  useGet<StoryInfo>({
    path: `/item/${id}.json`,
  });
