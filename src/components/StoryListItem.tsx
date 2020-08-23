import React, { useMemo } from 'react'
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { Box, Text } from 'theme-ui';
import Skeleton from 'react-loading-skeleton';

interface StoryListItemProps {
  storyId: number;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({ storyId }) => {
  const { data, loading } = useGetStoryInfo(storyId);
  const isDataReady = useMemo(() => !loading && data, [data, loading]);
  return (
    <Box p={3} sx={{
      border: "1px solid #ccc",
      borderRadius: 10,
      maxWidth: '600px',
      margin: '8px auto',
      minHeight: '60px'
    }}>
      {isDataReady ? <Text>{data?.title}</Text> : <Skeleton />}
    </Box>
  );
}
