import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureStatsSectionBox = styled(Box)(({ theme }) => ({
  padding: "24px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  margin: "24px 0px",
  borderRadius: "16px",
}));

export const StatsContainer = styled(Box)(() => ({
  width: "50%",
}));
