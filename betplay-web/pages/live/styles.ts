import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HomeSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("desktop")]: {
    justifyContent: "center",
  },
}));

const DashboardStyles = () => null;
export default DashboardStyles;
