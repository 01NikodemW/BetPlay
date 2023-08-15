import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureLineupSectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
}));

export const HomeTeamBox = styled(Box)(() => ({
  display: "flex",
  gap: "36px",
  marginBottom: "36px",
}));

export const AwayTeamBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row-reverse",
  gap: "36px",
}));
export const RightSideBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40%",
}));

export const LineupSectionHeader = styled(Typography)(() => ({
  marginBottom: "24px",
}));

export const HomeTeamHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const AwayTeamHeader = styled(Typography)(() => ({
  marginBottom: "16px",
  textAlign: "right",
}));
