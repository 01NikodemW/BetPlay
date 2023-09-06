import { Box } from "@mui/material";
import { styled } from "@mui/system";

const startPitchHeight = 600;
const startPitchWidth = 600;
const startGoalWidth = 156;
const startGoalHeight = 70;

const startPenaltyWidth = 470;
const startPenaltyHeight = 160;
const startCenterCircle = 100;

export const TeamLineupBox = styled(Box)(({ theme }) => {
  const pitchHeight = theme.breakpoints.down("tablet")
    ? "100%"
    : startPitchHeight;
  const pitchWidth = startPitchWidth;

  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: `${pitchHeight}px`,
    height: `${pitchWidth}px`,
    border: "2px solid black",
    paddingTop: "20px",
    paddingBottom: "20px",
    background: "#417f26",
    position: "relative",
  };
});

export const Line = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "70px",

  [theme.breakpoints.down("phone")]: {
    gap: "25px",
  },
}));

export const GoalTopBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const goalWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalWidth
    : startGoalWidth;
  const goalHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalHeight
    : startGoalHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `1px`,
    width: `${(goalWidth * 100) / pitchWidth}%`,
    bottom: `${goalHeight}px`,
    left: `${((pitchWidth - goalWidth) / 2 / pitchWidth) * 100}%`,
  };
});

export const GoalLeftBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const goalWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalWidth
    : startGoalWidth;
  const goalHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalHeight
    : startGoalHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `${goalHeight}px`,
    width: "1px",
    bottom: "0",
    left: `${((pitchWidth - goalWidth) / 2 / pitchWidth) * 100}%`,
  };
});

export const GoalRightBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const goalWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalWidth
    : startGoalWidth;
  const goalHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startGoalHeight
    : startGoalHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `${goalHeight}px`,
    width: "1px",
    bottom: "0",
    left: `${((pitchWidth + goalWidth) / 2 / pitchWidth) * 100 - 0.75}%`,
  };
});

export const PenaltyTopBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const penaltyWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyWidth
    : startPenaltyWidth;
  const penaltyHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyHeight
    : startPenaltyHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `1px`,
    width: `${(penaltyWidth * 100) / pitchWidth}%`,
    bottom: `${penaltyHeight}px`,
    left: `${((pitchWidth - penaltyWidth) / 2 / pitchWidth) * 100}%`,
  };
});

export const PenaltyLeftBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const penaltyWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyWidth
    : startPenaltyWidth;
  const penaltyHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyHeight
    : startPenaltyHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `${penaltyHeight}px`,
    width: "1px",
    bottom: "0",
    left: `${((pitchWidth - penaltyWidth) / 2 / pitchWidth) * 100}%`,
  };
});

export const PenaltyRightBox = styled(Box)(({ theme }) => {
  const pitchWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPitchWidth
    : startPitchWidth;
  const penaltyWidth = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyWidth
    : startPenaltyWidth;
  const penaltyHeight = theme.breakpoints.down("tablet")
    ? 1.2 * startPenaltyHeight
    : startPenaltyHeight;

  return {
    position: "absolute",
    border: "2px solid white",
    height: `${penaltyHeight}px`,
    width: "1px",
    bottom: "0",
    left: `${((pitchWidth + penaltyWidth) / 2 / pitchWidth) * 100 - 0.75}%`,
  };
});

export const CenterCircle = styled(Box)(({ theme }) => {
  const centerCircle = theme.breakpoints.down("tablet")
    ? 1.2 * startCenterCircle
    : startCenterCircle;

  return {
    width: `${2 * centerCircle}px`,
    height: `${centerCircle}px`,
    border: "4px solid white",
    borderTop: "none",
    borderRadius: `0 0 ${centerCircle}px ${centerCircle}px`,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: -2,
  };
});
