import React, { useState, useCallback } from 'react'
import { useGetTopStories } from '../hooks/api/useGetTopStories';
import { StoryListItem } from '../components/StoryListItem';
import { Header } from '../components/Header';
import { Box } from 'theme-ui';

const Home: React.FC = () => {
  const [limit, setLimit] = useState(10);
  const { data } = useGetTopStories(limit);
  const loadMore = useCallback(() => {
    setLimit(limit => limit + 10);
  }, [setLimit]);

  return (
    <Box sx={{ height: '105vh' }}>
      <Header/>
      {data?.map(storyId => <StoryListItem key={storyId} storyId={storyId}/>)}
      <button onClick={loadMore}> Load More </button>
    </Box>
  )
}

export default Home;
