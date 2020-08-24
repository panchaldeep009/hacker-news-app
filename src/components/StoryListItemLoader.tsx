import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import Skeleton from 'react-loading-skeleton';
import { StoryMetaBox, StoryViewButton } from './ui/StoryListItem';

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
        <Skeleton height={8} />
      </Box>
    </StoryMetaBox>
    <StoryViewButton>
      <Skeleton width={70} height={10} />
    </StoryViewButton>
  </Flex>
);
