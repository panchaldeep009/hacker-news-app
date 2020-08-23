import { useGet } from "restful-react";

export const useGetTopStories = (limit?: number) => {
  const { data, ...rest } =  useGet<number[]>({
    path: "/topstories.json",
  });
  const limitedData = data && [...data].slice(0, limit || 20);
  return {...rest, data: limitedData };
}