import React from 'react';
import { Text } from '@chakra-ui/core';
import Styled from '@emotion/styled';

export const HeaderButtonText = Styled.a<HeaderProps>({
  transition: '0.2s',
  textDecoration: 'none',
  marginLeft: '4px',
  marginRight: '4px',
  }, ({ isActive }) => isActive ? ({ 
    color: "#555",
    textDecoration: 'underline'
   }) : ({
    color: "#AAA",
    ":hover": {
      cursor: 'pointer',
      color: "#555",
      marginLeft: '8px',
      marginRight: '8px',
      textDecoration: 'underline'
    }
  }));

interface HeaderProps {
  isActive?: boolean;
}

export const HeaderButton: React.FC<HeaderProps> = ({ children, isActive }) => {
  return (
    <Text color="orange.300" px={2}>
      [
        <HeaderButtonText isActive={isActive}>
          {children}
        </HeaderButtonText>
      ]
    </Text>
  )
}
