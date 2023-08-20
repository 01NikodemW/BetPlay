import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureStatsSectionBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  margin: "24px 0px",
  position: "relative",
}));

export const EmptyCard = styled(Box)(() => ({
  width: "25%",
}));

export const BetsContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
}));

export const BetHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const BetContainer = styled(Box)(() => ({
  marginBottom: "16px",
}));
