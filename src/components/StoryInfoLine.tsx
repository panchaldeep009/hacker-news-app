import React from 'react';
import { StoryInfo } from '../hooks/api/useGetStoryInfo';
import { Text, Link } from '@chakra-ui/core';
import { format } from 'timeago.js';

export const getTimeText = (stamp: number) => format(new Date(stamp * 1000));

export const StoryInfoLine: React.FC<{
  data: StoryInfo;
  link?: string;
}> = ({ data, link }) => (
  <Text gridArea="info" fontSize="sm" color="gray.600">
    {data.score} points by {data.by} {getTimeText(data.time)} |{' '}
    <Link href={link} color="orange" fontSize="sm">
      {data.descendants} comments{' '}
    </Link>
  </Text>
);
