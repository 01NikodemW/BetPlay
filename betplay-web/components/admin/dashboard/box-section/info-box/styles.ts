import { rem } from "@/utils/px-to-rem";
import { Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const TopText = styled(Typography)(() => ({
  fontSize: rem(20),
}));

export const BottomText = styled(Typography)(() => ({
  fontSize: rem(24),
  fontWeight: 600,
}));
