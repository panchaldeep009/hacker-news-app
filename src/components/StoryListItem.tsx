/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo, useCallback } from 'react';
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Link, Flex } from '@chakra-ui/core';
import Url from 'url-parse';
import { StoryMetaBox, StoryViewButton } from './ui/StoryListItem';
import { StoryListItemLoader } from './StoryListItemLoader';
import { useLocation, useHistory } from 'react-router-dom';
import { StoryInfoLine } from './StoryInfoLine';

interface StoryListItemProps {
  storyId: number;
  index: number;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({
  storyId,
  index,
}) => {
  const { data, loading } = useGetStoryInfo(storyId);
  const { pathname } = useLocation();
  const { push } = useHistory();
  const url = useMemo(() => (data?.url ? new Url(data.url) : undefined), [
    data,
  ]);
  const detailsPageUrl = useMemo(() => pathname + '/' + data?.id, [
    data,
    pathname,
  ]);
  const gotoBlockPage = useCallback(() => {
    if (data?.url) {
      window.location.href = data.url;
      return;
    }
    push(detailsPageUrl);
  }, [data, detailsPageUrl, push]);
  const gotoDetailsPage = useCallback(() => push(detailsPageUrl), [
    detailsPageUrl,
    push,
  ]);

  return !loading ? (
    <Flex my={2}>
      <StoryMetaBox>
        {data && (
          <>
            <Text gridArea="index" justifySelf="center">
              {index}
            </Text>
            <Link gridArea="title" as="a" onClick={gotoBlockPage} fontSize="md">
              {data.title}
            </Link>
            {url && (
              <Link
                as="a"
                gridArea="url"
                href={url.origin}
                color="gray.500"
                fontSize="sm"
                justifySelf="right"
              >
                {url.hostname}
              </Link>
            )}
            <StoryInfoLine data={data} gotoDetailsPage={gotoDetailsPage} />
          </>
        )}
      </StoryMetaBox>
      <StoryViewButton onClick={gotoDetailsPage}>View Details</StoryViewButton>
    </Flex>
  ) : (
    <StoryListItemLoader />
  );
};
