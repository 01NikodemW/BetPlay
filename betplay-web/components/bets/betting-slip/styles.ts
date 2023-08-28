import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BettingSlipBox = styled(Box)(({ theme }) => ({
  borderRadius: "16px",
  border: `1px solid ${theme.palette.secondary.main}`,
}));

export const TopSectionBox = styled(Box)(({ theme }) => ({
  height: "40px",
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
}));

export const BetsStatusBox = styled(Box)(() => ({
  display: "flex",
  gap: "4px",
}));

export const BetStatusIcon = styled(Box)<{
  status: string;
}>(({ status }) => ({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  backgroundColor:
    status === "won" ? "#4caf50" : status === "lost" ? "#f44336" : "#ffc107",
}));

export const BettingSlipTypography = styled(Typography)<{
  status: string;
}>(({ status }) => ({
  backgroundColor:
    status === "won" ? "#4caf50" : status === "lost" ? "#f44336" : "#ffc107",
  padding: "0px 4px",
  fontWeight: "700",
  borderRadius: "4px",
}));

export const BottomSectionBox = styled(Box)(() => ({
  padding: "0 16px",
}));

export const TypographyBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
