import React, { useEffect, useState, useMemo } from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';
import Styled from '@emotion/styled';
import { HeaderButton } from './HeaderButton';
import { routes } from '../routes';

const transition = '0.2s';
const HeaderBox = Styled(Box)({
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

const MenuItems = [
  {
    name: routes.stories.title,
    path: routes.stories.path,
  },
  {
    name: routes.ask.title,
    path: routes.ask.path,
  },
  {
    name: routes.shows.title,
    path: routes.shows.path,
  },
  {
    name: routes.jobs.title,
    path: routes.jobs.path,
  },
] as const;

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
        {MenuItems.map(({ name, path }) => (
          <HeaderButton key={path} href={path}>
            {name}
          </HeaderButton>
        ))}
      </Flex>
    </Box>
  );
};
