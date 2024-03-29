import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#ff0000",
};

const button = {
  main: "#d5ff3f",
  light: "#d4f55d",
  dark: "#91b806",
  disabled: "#d4f55d",
  contrastText: "#151515",
};

const menu = {
  main: "#EDF2F7",
};

const divider = "#C6C6C6";

const primary = {
  main: "#EDF2F7",
  light: "#828DF8",
  dark: "#3832A0",
  contrastText: "#151515",
};

//////////////////////////////

const secondary = {
  main: "#d5ff3f",
  light: "#d4f55d", //TODO: pick lighter color
  dark: "#0B815A", //TODO: pick darker color
  contrastText: "#151515",
};

const success = {
  main: "#2E7D32",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: "#151515",
};

const error = {
  main: "#D3302F",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: "#151515",
};

const warning = {
  main: "#ED6C03",
  light: "#FFBF4C",
  dark: "#B27B16",
  contrastText: "#151515",
};

const info = {
  main: "#0188D1",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: "#151515",
};

const text = {
  primary: "#EDF2F7",
  secondary: "#A0AEC0",
  disabled: "rgba(255, 255, 255, 0.48)",
};

const background = {
  default: "#2a2a2a",
  paper: "#151515",

  // paper: "#2a2a2a",
  // default: "#151515",
};

const contrastBackground = {
  default: "#e9e9e9",
  weak: "#444",
  paper: "#FFFFFF",
};

export const darkThemeOptions: ThemeOptions = {
  typography: {
    h1: {
      color: text.primary,
    },
    h2: {
      color: text.primary,
    },
    h3: {
      color: text.primary,
    },
    h4: {
      color: text.primary,
    },
    h5: {
      color: text.primary,
    },
    h6: {
      color: text.primary,
    },
    subtitle1: {
      color: text.primary,
    },
    subtitle2: {
      color: text.primary,
    },
    body1: {
      color: text.primary,
    },
    body2: {
      color: text.primary,
    },
    caption: {
      color: text.secondary,
    },
    overline: {
      color: "#FF546F",
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: text.primary,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: divider,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: divider,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary": {
            backgroundColor: button.main,
            color: button.contrastText,
            "&:hover": {
              backgroundColor: button.light,
            },
            //disabled
            "&.Mui-disabled": {
              backgroundColor: button.dark,
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // border: `1px solid ${divider}`,
        },
      },
    },

    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       "&::placeholder": {
    //         opacity: 1,
    //         color: text.secondary,
    //       },

    //       color: "red",
    //     },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: divider,
    //     },
    //   },
    // },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[500],
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "light",
    primary,
    secondary,
    success,
    text,
    warning,
    neutral,
    button,
    menu,
    contrastBackground,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};
