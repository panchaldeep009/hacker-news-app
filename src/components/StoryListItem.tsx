import React, { useMemo } from 'react'
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Stack, Link } from '@chakra-ui/core';
import Skeleton from 'react-loading-skeleton';
import Url from 'url-parse';

interface StoryListItemProps {
  storyId: number;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({ storyId }) => {
  const { data, loading } = useGetStoryInfo(storyId);
  const isDataReady = useMemo(() => !loading && data, [data, loading]);
  const url = useMemo(() => data?.url && (new Url(data.url)), [data]);
  return (
    <Stack spacing={8} direction="row">
      <Text>1</Text>
      <Stack spacing={1} >
        {isDataReady ? <Link as="a" href={data?.url} fontSize="lg">{data?.title}</Link> : <Skeleton />}
        {url ? <Link href={url.origin} color="gray.500" fontSize="sm">{url.hostname}</Link> : <Skeleton height={10} width={100}/>}
      </Stack>
    </Stack>
    //   border: "1px solid #ccc",
    //   borderRadius: 10,
    //   maxWidth: '600px',
    //   margin: '8px auto',
    //   minHeight: '60px',
    //   display: 'grid',
    //   gridTemplateColumns: '1fr',
    //   gap: '5px'
    // }}>
  );
}
