import React, { useEffect, useState, useMemo } from 'react';
import { Box, Heading, Text } from 'theme-ui';
import { HeaderButton } from './HeaderButton';

const transition = '0.2s';

export const Header: React.FC = () => {
  const [isWindowScrolled, setSetWindowScrolled] = useState(false);
  const [height, fontSize] = useMemo(() => isWindowScrolled ? [85, 25] : [300, 50], [isWindowScrolled]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.screenY < 10) {
        setSetWindowScrolled(false);
      } else {
        setSetWindowScrolled(true);
      }
    })
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      position: 'sticky',
      transition,
      top: 0, left: 0,
      background: 'rgba(255, 255, 255, .5)',
      backdropFilter: 'blur(15px)',
      height }}>
      <Heading color="#777" sx={{ 
        display: 'inline-flex',
        fontSize,
        transition,
      }}>
        Hacker <Text color="primary">News</Text>
      </Heading>
      <Box sx={{ display: 'flex'}}>
        {["Top Stories", "Best Stories", "New Stories"].map(button => <HeaderButton key={button}>{button}</HeaderButton>)}
      </Box>
    </Box>
  )
}
