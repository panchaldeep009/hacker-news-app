import React, { useState, useCallback } from 'react'
import { useGetStories } from '../hooks/api/useGetStories';
import { StoryListItem, StoryListItemLoader } from '../components/StoryListItem';
import { Box } from '@chakra-ui/core';
import InfiniteScroll from 'react-infinite-scroller';

const Stories: React.FC = () => {
  const [limit, setLimit] = useState(1);
  const { data, loading, total } = useGetStories(limit);

  const loadMore = useCallback(() => {
    setLimit(limit => limit + 1);
  }, [setLimit]);

  return (
    <Box maxW={685} margin="0 auto">
      {!loading ? (
        <>
          <InfiniteScroll
              pageStart={0}
              loadMore={loadMore}
              hasMore={data ? limit < total : true}
              loader={<StoryListItemLoader key={0}/>}
          >
            {data?.map((storyId, index) => <StoryListItem index={index+1} key={storyId} storyId={storyId}/>)}
          </InfiniteScroll>
        </>
        ) : (
        <>
          {Object.keys([...Array(15)]).map(i => (<StoryListItemLoader key={i} />))}
        </>
        )
      }
  </Box>
  );
}

export default Stories;
