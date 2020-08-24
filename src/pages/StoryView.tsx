import React from 'react';
import { Box, Divider, Heading } from '@chakra-ui/core';
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { StoryInfoLine } from '../components/StoryInfoLine';
import { Comments } from '../components/Comments';

const StoryView: React.FC = () => {
  const { id: storyId } = useParams<{ id: string }>();
  const { data, loading } = useGetStoryInfo(parseInt(storyId, 10));
  return (
    <Box maxW={1024} margin="0 auto" p={5}>
      {loading ? (
        <>
          <Skeleton height={30} />
          <Skeleton height={15} />
          <Divider my={5} />
          <Skeleton height={14} count={7} />
          <Skeleton height={14} width={100} />
          <br />
          <Skeleton width={150} height={25} css={{ marginTop: 5 }} />
          <Divider my={3} />
        </>
      ) : (
        <>
          <Heading> {data?.title} </Heading>
          {data && <StoryInfoLine data={data} />}
          <Divider my={5} />
          {data?.text && (
            <Box dangerouslySetInnerHTML={{ __html: data.text }} />
          )}
          <Heading mt={5} size="md">
            Comments ({data?.descendants || 0})
          </Heading>
          <Divider my={3} />
          {data?.kids && <Comments ids={data.kids} />}
        </>
      )}
    </Box>
  );
};

export default StoryView;
