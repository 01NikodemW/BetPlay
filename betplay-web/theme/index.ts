import type { Theme } from "@mui/material";
import { createTheme as createMuiTheme } from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { lightThemeOptions } from "./light-theme-options";
import { darkThemeOptions } from "./dark-theme-options";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface Button {
  main: string;
  light: string;
  dark: string;
}

interface Menu {
  main: string;
}

interface Sizes {
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
}

interface Spaces {
  xxxxxsmall: string;
  xxxxsmall: string;
  xxxsmall: string;
  xxsmall: string;
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
  xxlarge: string;
  xxxlarge: string;
  xxxxlarge: string;
  xxxxxlarge: string;
}

interface ContrastBackground {
  default: string;
  paper: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Neutral;
    button: Button;
    menu: Menu;
    contrastBackground: ContrastBackground;
  }

  interface PaletteOptions {
    neutral?: Neutral;
    button: Button;
    menu: Menu;
    contrastBackground: ContrastBackground;
  }

  interface Theme {
    sizes: Sizes;
    spaces: Spaces;
  }

  interface ThemeOptions {
    sizes?: Sizes;
    spaces?: Spaces;
  }

  interface BreakpointOverrides {
    extraSmallPhone: true;
    smallPhone: true;
    phone: true;
    smallTablet: true;
    tablet: true;
    desktop: true;
    largeDesktop: true;
  }
}

// export const createTheme = (config: ThemeConfig): Theme => {
export const createTheme = (): Theme => {
  const isDarkMode = false;
  let theme = createMuiTheme(
    baseThemeOptions,
    isDarkMode ? darkThemeOptions : lightThemeOptions
  );

  return theme;
};
