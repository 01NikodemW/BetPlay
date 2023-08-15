import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const SubstitutesBox = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "24px",
}));

export const SubstitutesHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));
