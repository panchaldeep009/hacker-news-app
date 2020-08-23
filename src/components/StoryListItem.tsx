import React, { useMemo } from 'react'
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Link, Flex, Box, DefaultTheme } from '@chakra-ui/core';
import Skeleton from 'react-loading-skeleton';
import Url from 'url-parse';
import Styled from '@emotion/styled';
import { format } from "timeago.js";

interface StoryListItemProps {
  storyId: number;
  index: number;
}

const StoryMetaBox = Styled(Styled(Box)({
  border: "1px solid #ccc",
  borderRadius: "10px 0px 0px 10px",
  borderRightWidth: '0px',
  minHeight: '60px',
  width: '100%',
  padding: 8,
  display: 'grid',
  gridTemplateColumns: '25px 1fr auto',
  gridTemplateRows: 'auto auto',
  gap: 5
}))`
grid-template-areas:
  "index title url"
  "index info info";
@media (max-width: 512px) {
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "index title title"
    "index info info"
    "index url url";
}
`;

const StoryViewButton = Styled(Flex)(({ theme }) => {
  const { 
    colors: { orange },
    fontSizes: { sm: fontSize }
  } = theme as DefaultTheme;
  return {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: orange[300],
    color: orange[300],
    borderRadius: "0px 10px 10px 0px",
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 'max-content',
    fontSize,
    padding: "0 10px",
    ":hover": {
      textDecoration: 'underline'
    }
  }
});

export const StoryListItem: React.FC<StoryListItemProps> = ({ storyId, index }) => {
  const { data, loading } = useGetStoryInfo(storyId);
  const url = useMemo(() => data?.url ? new Url(data.url) : undefined, [data]);

  return !loading ? (
    <Flex my={2}>
      <StoryMetaBox>
        {data &&
          <>
            <Text gridArea="index" justifySelf="center">{index}</Text>
            <Link gridArea="title" as="a" href={data.url} fontSize="md">{data.title}</Link>
            {url && <Link gridArea="url" href={url.origin} color="gray.500" fontSize="sm" justifySelf="right">{url.hostname}</Link>}
            <Text gridArea="info" fontSize="sm" color="gray.600">
              {data.score} points by {data.by} {format(new Date(data.time * 1000))} | {data.descendants} comments
            </Text>
          </>
        }
      </StoryMetaBox>
      <StoryViewButton>
        View Details
      </StoryViewButton>
    </Flex>
  ) : (
    <StoryListItemLoader />
  );
}

export const StoryListItemLoader: React.FC = () => (
  <Flex my={2}>
    <StoryMetaBox>
    <Box gridArea="index" justifySelf="center">
      <Skeleton circle width={20} height={20} />
    </Box>
    <Box gridArea="title">
      <Skeleton width={300} height={20} />
    </Box>
    <Box gridArea="url">
      <Skeleton width={100} height={10} />
    </Box>
    <Box gridArea="info">
      <Skeleton width={140} height={8} />
    </Box>
    </StoryMetaBox>
    <StoryViewButton>
      <Skeleton width={70} height={10} />
    </StoryViewButton>
  </Flex>
);