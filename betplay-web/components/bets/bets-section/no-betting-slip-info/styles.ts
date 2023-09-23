import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const InfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  padding: "16px",
}));

export const BottomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
