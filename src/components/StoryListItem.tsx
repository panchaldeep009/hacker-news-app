import React from 'react'
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';

interface StoryListItemProps {
  storyId: number;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({ storyId }) => {
  const { data, loading } = useGetStoryInfo(storyId);
  return (
    <div>
      {!loading && data ? 
      <>
        title: {data.title}
        by: {data.by}
        url: {data.url}
      </>
      : 'loading'}
    </div>
  )
}
