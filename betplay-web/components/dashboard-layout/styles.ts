import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";

export const DashboardLayoutContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
}));

export const ContainerWrapper = styled(Container)(() => ({
  // paddingTop: "24px",
  display: "flex",
  flexDirection: "column",
}));
