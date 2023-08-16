import { rem } from "@/utils/px-to-rem";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface FlagBox {
  selected: string;
}

export const BetWithNameButton = styled(Button)<FlagBox>(
  ({ theme, selected }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor:
      selected === "true"
        ? theme.palette.text.primary
        : theme.palette.secondary.main,
    borderRadius: "16px",
    flex: 1,
    color:
      selected === "true"
        ? theme.palette.secondary.main
        : theme.palette.text.primary,

    "&:hover": {
      backgroundColor:
        selected === "true"
          ? theme.palette.text.primary
          : theme.palette.secondary.light,
    },
  })
);

export const BottomTypography = styled(Typography)(() => ({
  fontSize: rem(12),
  fontWeight: 700,
}));
