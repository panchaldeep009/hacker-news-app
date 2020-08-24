import React from 'react';
import { Spinner, Flex } from '@chakra-ui/core';

export const PageLoader: React.FC = () => {
  return (
    <Flex p={10} w="100%" justifyContent="center">
      <Spinner color="orange.500" size="xl" />
    </Flex>
  );
};
