import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureLineupSectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "24px",
}));

export const HomeTeamBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));
export const RightSideBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const LineupSectionHeader = styled(Typography)(({ theme }) => ({}));
