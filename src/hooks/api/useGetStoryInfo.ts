import { useGet } from "restful-react";

interface StoryInfo {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
}

export const useGetStoryInfo = (id: number) => useGet<StoryInfo>({
  path: `/item/${id}.json`,
});