import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureEventBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const LeftSideBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const CenterElement = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "30px",
}));

export const TimeTypography = styled(Typography)(() => ({}));

interface TimeLineProps {
  makeinvisible?: string;
}

export const TimeLine = styled(Box)<TimeLineProps>(
  ({ makeinvisible, theme }) => ({
    width: "2px",
    height: "15px",
    backgroundColor: theme.palette.primary.main,
    visibility: makeinvisible === "true" ? "hidden" : "visible",
  })
);

export const RightSideBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));
