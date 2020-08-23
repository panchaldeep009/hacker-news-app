import React, { useMemo } from 'react';
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Link, Flex } from '@chakra-ui/core';
import Url from 'url-parse';
import { format } from 'timeago.js';
import { StoryMetaBox, StoryViewButton } from './ui/StoryListItem';
import { StoryListItemLoader } from './StoryListItemLoader';

interface StoryListItemProps {
  storyId: number;
  index: number;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({
  storyId,
  index,
}) => {
  const { data, loading } = useGetStoryInfo(storyId);
  const url = useMemo(() => (data?.url ? new Url(data.url) : undefined), [
    data,
  ]);

  return !loading ? (
    <Flex my={2}>
      <StoryMetaBox>
        {data && (
          <>
            <Text gridArea="index" justifySelf="center">
              {index}
            </Text>
            <Link gridArea="title" as="a" href={data.url} fontSize="md">
              {data.title}
            </Link>
            {url && (
              <Link
                gridArea="url"
                href={url.origin}
                color="gray.500"
                fontSize="sm"
                justifySelf="right"
              >
                {url.hostname}
              </Link>
            )}
            <Text gridArea="info" fontSize="sm" color="gray.600">
              {data.score} points by {data.by}{' '}
              {format(new Date(data.time * 1000))} | {data.descendants} comments
            </Text>
          </>
        )}
      </StoryMetaBox>
      <StoryViewButton>View Details</StoryViewButton>
    </Flex>
  ) : (
    <StoryListItemLoader />
  );
};
