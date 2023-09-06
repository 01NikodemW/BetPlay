import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";

export const UppercaseButton = styled(Button)(() => ({
  textTransform: "uppercase",
  fontSize: rem(14),
}));

export const StyledOutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  border: `2px solid ${theme.palette.button.main}`,
  fontSize: rem(12),
  fontWeight: 700,

  "&:hover": {
    backgroundColor: theme.palette.button.light,
    color: theme.palette.button.contrastText,
  },
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(14),
    width: "100%",
  },
}));

export const StyledContrastOutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  border: `2px solid ${theme.palette.button.main}`,
  fontSize: rem(12),

  "&.MuiButtonBase-root": {
    color: theme.palette.background.default,
    fontWeight: 700,
  },

  "&:hover": {
    backgroundColor: theme.palette.button.light,
    color: theme.palette.button.contrastText,
  },
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(14),
    width: "100%",
  },
}));
