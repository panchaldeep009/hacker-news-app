import React, { useMemo } from 'react';
import { Text } from '@chakra-ui/core';
import Styled from '@emotion/styled';
import { matchPath, useLocation } from 'react-router-dom';
interface HeaderProps {
  isActive?: boolean;
}

export const HeaderButtonText = Styled.a<HeaderProps>(
  {
    transition: '0.2s',
    textDecoration: 'none',
    marginLeft: '4px',
    marginRight: '4px',
  },
  ({ isActive }) =>
    isActive
      ? {
          color: '#555',
          textDecoration: 'underline',
        }
      : {
          color: '#AAA',
          ':hover': {
            cursor: 'pointer',
            color: '#555',
            marginLeft: '8px',
            marginRight: '8px',
            textDecoration: 'underline',
          },
        }
);

export const HeaderButton: React.FC<React.HTMLProps<HTMLAnchorElement>> = (
  linkProps
) => {
  const { pathname } = useLocation();
  const isActive = useMemo(
    () => matchPath(pathname, { path: linkProps.href }),
    [pathname, linkProps.href]
  );
  return (
    <Text color="orange.300" px={2}>
      [<HeaderButtonText isActive={!!isActive} {...linkProps} />]
    </Text>
  );
};
