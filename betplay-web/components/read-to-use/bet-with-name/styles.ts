import { rem } from "@/utils/px-to-rem";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BetWithNameButton = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "16px",
  flex: 1,

  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

export const TopTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(16),
}));

export const BottomTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(12),
}));
