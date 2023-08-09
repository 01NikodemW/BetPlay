import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureLineupSectionBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: "24px",
}));

export const HomeTeamBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "36px",
}));
export const RightSideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "40%"
}));

export const LineupSectionHeader = styled(Typography)(({ theme }) => ({}));

export const SubstitutesHeader = styled(Typography)(({ theme }) => ({}));
