import { Box } from "@mui/material";
import { styled } from "@mui/system";

const pitchHeight = 600;
const pitchWidth = 600;
const goalWidth = 156;
const goalHeight = 70;

const penaltyWidth = 370;
const penaltyHeight = 160;
const centerCircle = 100;

export const TeamLineupBox = styled(Box)(({ theme }) => ({
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
}));

export const Line = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Player = styled(Box)(({ theme }) => ({
  margin: "0 10px",
  background: "blue",
  color: "white",
  padding: "5px",
  borderRadius: "50%",
}));

export const GoalTopBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `1px`,
  width: `${goalWidth}px`,
  bottom: `${goalHeight}px`,
  left: `${(pitchWidth - goalWidth) / 2}px`,
});

export const GoalLeftBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `${goalHeight}px`,
  width: "1px",
  bottom: "0",
  left: `${(pitchWidth - goalWidth) / 2}px`,
});

export const GoalRightBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `${goalHeight}px`,
  width: "1px",
  bottom: "0",
  right: `${(pitchWidth - goalWidth) / 2 - 4}px`,
});

export const PenaltyTopBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `1px`,
  width: `${penaltyWidth}px`,
  bottom: `${penaltyHeight}px`,
  left: `${(pitchWidth - penaltyWidth) / 2}px`,
});

export const PenaltyLeftBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `${penaltyHeight}px`,
  width: "1px",
  bottom: "0",
  left: `${(pitchWidth - penaltyWidth) / 2}px`,
});

export const PenaltyRightBox = styled(Box)({
  position: "absolute",
  border: "2px solid white",
  height: `${penaltyHeight}px`,
  width: "1px",
  bottom: "0",
  right: `${(pitchWidth - penaltyWidth) / 2 - 4}px`,
});

export const CenterCircle = styled(Box)({
  width: `${2 * centerCircle}px`,
  height: `${centerCircle}px`,
  border: "4px solid white",
  borderTop: "none",
  borderRadius: `0 0 ${centerCircle}px ${centerCircle}px`,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: -2,
});
