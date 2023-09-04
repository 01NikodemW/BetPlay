import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureLineupSectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  margin: "24px 0px",
  borderRadius: "16px",
}));

export const HomeTeamBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "36px",
  marginBottom: "36px",
  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column",
  },
}));

export const AwayTeamBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row-reverse",
  gap: "36px",
}));
export const RightSideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40%",
  [theme.breakpoints.down("tablet")]: {
    flexDirection: "column-reverse",
    width: "100%",
  },
}));

export const HomeTeamHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const AwayTeamHeader = styled(Typography)(() => ({
  marginBottom: "16px",
  textAlign: "right",
}));
