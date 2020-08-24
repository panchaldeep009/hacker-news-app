import React from 'react';
import { Heading } from '@chakra-ui/core';

export const Page404 = () => {
  return (
    <>
      <Heading color="orange.300" textAlign="center" pt={30}>
        Page Not Found
      </Heading>
      <Heading textAlign="center" fontSize="6xl">
        404
      </Heading>
    </>
  );
};
