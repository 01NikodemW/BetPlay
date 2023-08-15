import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StatBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const StatTypography = styled(Typography)(() => ({
  margin: "8px 0px",
}));
