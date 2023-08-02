import { ThemeOptions } from '@mui/material';
import { rem } from '@/utils/px-to-rem';

const sizes = {
  xxxsmall: rem(10),
  xxsmall: rem(12),
  xsmall: rem(14),
  small: rem(16),
  medium: rem(20),
  large: rem(24),
  xlarge: rem(28),
  xxlarge: rem(32),
  xxxlarge: rem(40),
};

const spaces = {
  xxxxxsmall: '2px',
  xxxxsmall: '4px',
  xxxsmall: '8px',
  xxsmall: '12px',
  xsmall: '16px',
  small: '24px',
  medium: '32px',
  large: '48px',
  xlarge: '64px',
  xxlarge: '96px',
  xxxlarge: '128px',
  xxxxlarge: '192px',
  xxxxxlarge: '256px',
};

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 992,
      lg: 1200,
      xl: 1920,
      smallPhone: 420,
      phone: 576,
      smallTablet: 768,
      tablet: 992,
      desktop: 1200,
      largeDesktop: 1920,
    },
  },

  direction: 'ltr',

  typography: {
    button: {
      fontWeight: 500,
    },
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    body1: {
      fontSize: sizes.small,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: sizes.xsmall,
      fontWeight: 400,
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: sizes.small,
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: sizes.xsmall,
      fontWeight: 500,
      lineHeight: 1.6,
    },
    overline: {
      fontSize: sizes.xsmall,
      fontWeight: 500,
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: sizes.xxsmall,
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 600,
      fontSize: sizes.xxxlarge,
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 600,
      fontSize: sizes.xxlarge,
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 600,
      fontSize: sizes.xlarge,
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 600,
      fontSize: sizes.large,
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 600,
      fontSize: sizes.medium,
      lineHeight: 1.25,
    },
    h6: {
      fontWeight: 600,
      fontSize: sizes.small,
      lineHeight: 1.25,
    },
  },

  components: {
    //style card
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: spaces.xsmall,
          padding: spaces.small,
          paddingBottom: spaces.small,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: sizes.small,
          borderRadius: spaces.xxxsmall,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: spaces.xxxsmall,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: spaces.xxxsmall,
        },
      },
    },
  },

  sizes: sizes,
  spaces: spaces,
};
