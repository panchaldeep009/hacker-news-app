import { DefaultTheme, theme } from "@chakra-ui/core";

export const lightTheme: DefaultTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    black: "#444",
    white: "#fefefe",
  }
}