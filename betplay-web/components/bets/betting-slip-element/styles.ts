import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BettingSlipBox = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  border: `2px solid ${theme.palette.secondary.main}`,
  marginBottom: "16px",
}));

export const TopSectionBox = styled(Box)(({ theme }) => ({
  height: "40px",
  cursor: "pointer",
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
}));

export const BetsStatusBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
}));

export const BetStatusIcon = styled(Box)<{
  status: string;
}>(({ status }) => ({
  width: "16px",
  height: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  backgroundColor:
    status === "won" ? "#4caf50" : status === "lost" ? "#f44336" : "#ffc107",
}));

export const BettingSlipTypography = styled(Typography)<{
  status: string;
}>(({ status, theme }) => ({
  backgroundColor:
    status === "won" ? "#4caf50" : status === "lost" ? "#f44336" : "#ffc107",
  padding: "0px 4px",
  fontWeight: "700",
  borderRadius: "4px",
  color:
    theme.palette.background.default === "#2a2a2a"
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
}));

export const BottomSectionBox = styled(Box)<{ expanded: string }>(
  ({ expanded, theme }) => ({
    padding: "8px 16px",
    cursor: "pointer",
    borderTop:
      expanded === "true"
        ? `2px solid ${theme.palette.secondary.main}`
        : "none",
  })
);

export const TypographyBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

////

export const SingleBetsContainer = styled(Box)<{ expanded: string }>(
  ({ theme, expanded }) => ({
    height: expanded === "true" ? "200px" : 0,
    overflow: "scroll",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    flexDirection: "column",
    display: "flex",
    visibility: expanded === "true" ? "visible" : "hidden",
    padding: "0px 16px",
  })
);

export const SingleBetBox = styled(Box)<{ last: string }>(
  ({ theme, last }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom:
      last === "true"
        ? `8px solid transparent`
        : `1px solid ${theme.palette.secondary.main}}`,
    marginTop: "8px",
  })
);

export const SingleBetBottomBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
  alignItems: "center",
}));

export const OddTypeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  [theme.breakpoints.down("smallPhone")]: {
    flexDirection: "column",
    gap: "0px",
  },
}));

export const OddValueTypography = styled(Typography)<{
  status: string;
}>(({ status }) => ({
  fontWeight: "700",
  color:
    status === "won" ? "#4caf50" : status === "lost" ? "#f44336" : "#ffc107",
}));

export const SingleBetTopTypography = styled(Typography)(() => ({
  marginTop: "8px",
}));

export const DateBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "end",
  padding: "0px 16px",
}));
