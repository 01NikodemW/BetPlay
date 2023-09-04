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

export const StatsContainer = styled(Box)(({ theme }) => ({
  width: "50%",

  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    padding: "24px 48px",
  },

  [theme.breakpoints.down("smallTablet")]: {
    padding: "24px",
  },
  [theme.breakpoints.down("phone")]: {
    padding: "12px 0px",
  },
}));
