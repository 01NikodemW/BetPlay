import { rem } from "@/utils/px-to-rem";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BetWithNameButton = styled(Button)<{
  isselected: string;
}>(({ theme, isselected }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  backgroundColor:
    isselected === "true"
      ? theme.palette.text.primary
      : theme.palette.secondary.main,
  borderRadius: "16px",
  flex: 1,
  color:
    isselected === "true"
      ? theme.palette.secondary.main
      : theme.palette.text.primary,

  "&:hover": {
    backgroundColor:
      isselected === "true"
        ? theme.palette.text.primary
        : theme.palette.secondary.light,
  },
}));

export const TopTypography = styled(Typography)<{ selected: string }>(
  ({ theme, selected }) => ({
    color:
      theme.palette.background.default !== "#2a2a2a" && selected === "true"
        ? theme.palette.primary.contrastText
        : theme.palette.background.default !== "#2a2a2a" && selected === "false"
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
  })
);

export const BottomTypography = styled(Typography)<{ selected: string }>(
  ({ theme, selected }) => ({
    fontSize: rem(12),
    fontWeight: 700,
    color:
      theme.palette.background.default !== "#2a2a2a" && selected === "true"
        ? theme.palette.primary.contrastText
        : theme.palette.background.default !== "#2a2a2a" && selected === "false"
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
  })
);
