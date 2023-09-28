import { rem } from "@/utils/px-to-rem";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BetWithNameButton = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: selected
      ? theme.palette.text.primary
      : theme.palette.secondary.main,
    borderRadius: "16px",
    flex: 1,
    color: selected ? theme.palette.secondary.main : theme.palette.text.primary,

    "&:hover": {
      backgroundColor: selected
        ? theme.palette.text.primary
        : theme.palette.secondary.light,
    },
  })
);

export const TopTypography = styled(Typography)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    color:
      theme.palette.background.default !== "#2a2a2a" && selected
        ? theme.palette.primary.contrastText
        : theme.palette.background.default !== "#2a2a2a" && selected
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
  })
);

export const BottomTypography = styled(Typography)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    fontSize: rem(12),
    fontWeight: 700,
    color:
      theme.palette.background.default !== "#2a2a2a" && selected
        ? theme.palette.primary.contrastText
        : theme.palette.background.default !== "#2a2a2a" && selected
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
  })
);
