import React, { useState, useCallback, useMemo } from 'react';
import { Stack, Box, Text, Divider, Button, Collapse } from '@chakra-ui/core';
import InfiniteScroll from 'react-infinite-scroller';
import { useGetStoryInfo } from '../hooks/api/useGetStoryInfo';
import { getTimeText } from './StoryInfoLine';
import Skeleton from 'react-loading-skeleton';

interface CommentsProps {
  ids: number[];
}

export const Comments: React.FC<CommentsProps> = ({ ids }) => {
  const [limit, setLimit] = useState(1);
  const loadMore = useCallback(() => {
    setLimit((currentLimit) => currentLimit + 2);
  }, [setLimit]);
  const currentIds = useMemo(() => [...ids].slice(0, limit), [limit, ids]);

  return (
    <Stack spacing={3} pl={5}>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={limit < ids.length}
        loader={<CommentLoader />}
      >
        {currentIds.map((id) => (
          <Comment id={id} key={id} />
        ))}
      </InfiniteScroll>
    </Stack>
  );
};

interface CommentProps {
  id: number;
}

const Comment: React.FC<CommentProps> = ({ id }) => {
  const { data, loading } = useGetStoryInfo(id);

  const [showReplies, setShowReplies] = useState(false);
  const toggleShowReplies = () => setShowReplies((show) => !show);

  return loading ? (
    <CommentLoader />
  ) : (
    <>
      {data?.text && data.by && (
        <Box border="1px solid #ccc" rounded={10} p={3} my={2}>
          {data && (
            <Text color="gray.500">
              {data.by} : {getTimeText(data.time)}
            </Text>
          )}
          <Divider />
          {data?.text && (
            <Box dangerouslySetInnerHTML={{ __html: data.text }} />
          )}
          {data?.kids && data.kids.length > 0 && (
            <>
              <Divider />
              <Button
                variantColor="orange"
                onClick={toggleShowReplies}
                size="xs"
                variant="ghost"
              >
                {showReplies ? 'Hide' : 'View'} Replies ({data.kids.length})
              </Button>
              <Collapse mt={4} isOpen={showReplies}>
                {showReplies && <Comments ids={data.kids} />}
              </Collapse>
            </>
          )}
        </Box>
      )}
    </>
  );
};

const CommentLoader: React.FC = () => (
  <Box border="1px solid #ccc" rounded={10} p={3} my={2}>
    <Skeleton width={200} height={12} />
    <Divider />
    <Skeleton height={14} count={3} />
    <Skeleton height={14} width={50} />
  </Box>
);
