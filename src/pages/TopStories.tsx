import React, { useState, useCallback } from 'react'
import { useGetTopStories } from '../hooks/api/useGetTopStories';
import { StoryListItem, StoryListItemLoader } from '../components/StoryListItem';

const initialStoryListLoad = 15;

const Home: React.FC = () => {
  const [limit, setLimit] = useState(initialStoryListLoad);
  const { data, loading } = useGetTopStories(limit);

  const loadMore = useCallback(() => {
    setLimit(limit => limit + 10);
  }, [setLimit]);

  return !loading ? (
    <>
      {data?.map((storyId, index) => <StoryListItem index={index+1} key={storyId} storyId={storyId}/>)}
      <button onClick={loadMore}> Load More </button>
    </>
  ) : (
    <>
      {[...Array(initialStoryListLoad)].map(i => (<StoryListItemLoader key={i} />))}
    </>
  )
}

export default Home;
