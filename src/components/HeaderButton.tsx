import React from 'react';
import { Text, SxProps } from 'theme-ui';

interface HeaderProps {
  isActive?: boolean;
}

const basicButton: SxProps['sx'] = {
  cursor: 'pointer',
  transition: '0.2s'
}
const activeButton: SxProps['sx'] = {
  ...basicButton,
  color: "#AAA",
  marginX: '8px',
  textDecoration: 'underline'
}
const normalButton: SxProps['sx'] = {
  ...basicButton,
  color: "#CCC",
  marginX: '4px',
  ":hover": activeButton
}

export const HeaderButton: React.FC<HeaderProps> = ({ children, isActive }) => {
  return (
    <Text color="primary" role="button" px={2}>
      [
        <Text as="span" sx={isActive ? activeButton : normalButton}>
          {children}
        </Text>
      ]
    </Text>
  )
}
