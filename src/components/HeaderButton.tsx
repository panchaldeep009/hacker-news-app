import React, { useMemo } from 'react';
import { Text } from '@chakra-ui/core';
import Styled from '@emotion/styled';
import { matchPath, useLocation, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
interface HeaderProps {
  isActive?: boolean;
}

export const HeaderButtonText = Styled.a<HeaderProps>(
  {
    transition: '0.2s',
    textDecoration: 'none',
    marginLeft: '4px',
    marginRight: '4px',
    cursor: 'pointer',
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
            color: '#555',
            marginLeft: '8px',
            marginRight: '8px',
            textDecoration: 'underline',
          },
        }
);

export const HeaderButton: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  href,
  ...linkProps
}) => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  const isActive = useMemo(() => matchPath(pathname, { path: href }), [
    pathname,
    href,
  ]);
  return (
    <>
      <Helmet>
        {isActive && <title> {linkProps.children} | Hacker News</title>}
      </Helmet>
      <Text color="orange.300" px={2}>
        [
        <HeaderButtonText
          isActive={!!isActive}
          onClick={() => href && push(href)}
          {...linkProps}
        />
        ]
      </Text>
    </>
  );
};
