import React, { useEffect, useState, useMemo } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';
import Styled from '@emotion/styled';
import { HeaderButton } from './HeaderButton';

const transition = '0.2s';
const HeaderBox = Styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'sticky',
  transition,
  top: 0,
  left: 0,
  background: 'rgba(255, 255, 255, .5)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.12)',
});

export const Header: React.FC = () => {
  const [isWindowScrolled, setSetWindowScrolled] = useState(false);
  const [height, fontSize] = useMemo(
    () => (isWindowScrolled ? [85, 25] : [300, 50]),
    [isWindowScrolled]
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY < 10) {
        setSetWindowScrolled(false);
      } else {
        setSetWindowScrolled(true);
      }
    });
  }, []);

  return (
    <Box as={HeaderBox} h={height} zIndex={10}>
      <Heading fontSize={fontSize}>
        Hacker{' '}
        <Text as="span" color="orange.300">
          News
        </Text>
      </Heading>
      <Flex>
        {['Top Stories', 'Best Stories', 'New Stories'].map((button) => (
          <HeaderButton key={button}>{button}</HeaderButton>
        ))}
      </Flex>
    </Box>
  );
};
