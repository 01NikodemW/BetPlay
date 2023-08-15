import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureStatsSectionBox = styled(Box)(({ theme }) => ({
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  margin: "24px 0px",
}));

export const BetsContainer = styled(Box)(() => ({
  width: "50%",
}));

export const BetHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const BetContainer = styled(Box)(() => ({

}));
