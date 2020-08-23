import Styled from '@emotion/styled';
import { Box, Flex, DefaultTheme } from '@chakra-ui/core';

export const StoryMetaBox = Styled(
  Styled(Box)({
    border: '1px solid #ccc',
    borderRadius: '10px 0px 0px 10px',
    borderRightWidth: '0px',
    minHeight: '60px',
    width: '100%',
    padding: 8,
    display: 'grid',
    gridTemplateColumns: '25px 1fr auto',
    gridTemplateRows: 'auto auto',
    gap: 5,
  })
)`
grid-template-areas:
  "index title url"
  "index info info";
@media (max-width: 512px) {
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "index title title"
    "index info info"
    "index url url";
}
`;

export const StoryViewButton = Styled(Flex)(({ theme }) => {
  const {
    colors: { orange },
    fontSizes: { sm: fontSize },
  } = theme as DefaultTheme;
  return {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: orange[300],
    color: orange[300],
    borderRadius: '0px 10px 10px 0px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 'max-content',
    fontSize,
    padding: '0 10px',
    ':hover': {
      textDecoration: 'underline',
    },
  };
});
