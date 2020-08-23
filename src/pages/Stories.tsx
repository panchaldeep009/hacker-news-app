import React, { useState, useCallback } from 'react';
import { Box, Select } from '@chakra-ui/core';
import InfiniteScroll from 'react-infinite-scroller';

import {
  useGetStories,
  storyTypesOptions,
  StoryType,
  StoryCategories,
} from '../hooks/api/useGetStories';
import { StoryListItem } from '../components/StoryListItem';
import { StoryListItemLoader } from '../components/StoryListItemLoader';

interface StoriesProps {
  category: StoryCategories;
}

const Stories: React.FC<StoriesProps> = ({ category }) => {
  const [limit, setLimit] = useState(1);

  const [storyType, setStoryType] = useState<StoryCategories>(category);

  const { data, loading, total } = useGetStories(limit, storyType);

  const handleChangeStoryType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStoryType(e.target.value as StoryType);
    },
    [setStoryType]
  );

  const loadMore = useCallback(() => {
    setLimit((currentLimit) => currentLimit + 2);
  }, [setLimit]);

  return (
    <Box maxW={685} margin="0 auto" px={2} pt={30}>
      {category === 'topstories' && (
        <Select
          onChange={handleChangeStoryType}
          value={storyType}
          rounded={8}
          w={220}
        >
          {storyTypesOptions.map(({ label, value }) => (
            <option value={value}>{label}</option>
          ))}
        </Select>
      )}
      {!loading ? (
        <>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={data ? limit < total : true}
            loader={<StoryListItemLoader key={0} />}
          >
            {data?.map((storyId, index) => (
              <StoryListItem
                index={index + 1}
                key={storyId}
                storyId={storyId}
              />
            ))}
          </InfiniteScroll>
        </>
      ) : (
        <>
          {Object.keys([...Array(15)]).map((i) => (
            <StoryListItemLoader key={i} />
          ))}
        </>
      )}
    </Box>
  );
};

export default Stories;
