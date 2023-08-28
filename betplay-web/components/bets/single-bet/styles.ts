import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BetBox = styled(Box)<{ last: string }>(({ theme, last }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom:
    last === "true"
      ? `8px solid transparent`
      : `1px solid ${theme.palette.secondary.main}}`,
  marginTop: "8px",
}));

export const BetBottomBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
}));

export const TopTypography = styled(Typography)(() => ({
  marginTop: "8px",
}));
