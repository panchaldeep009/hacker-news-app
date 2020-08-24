import React from 'react';
import { StoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Button } from '@chakra-ui/core';
import { format } from 'timeago.js';

export const getTimeText = (stamp: number) => format(new Date(stamp * 1000));

export const StoryInfoLine: React.FC<{
  data: StoryInfo;
  gotoDetailsPage?: () => void;
}> = ({ data, gotoDetailsPage }) => (
  <Text gridArea="info" fontSize="sm" color="gray.600">
    {data.score} points by {data.by} {getTimeText(data.time)} |{' '}
    <Button
      onClick={gotoDetailsPage}
      variant="link"
      color="orange"
      fontSize="sm"
    >
      {data.descendants} comments{' '}
    </Button>
  </Text>
);
