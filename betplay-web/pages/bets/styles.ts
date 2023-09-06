import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const BetsSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "124px",
  [theme.breakpoints.down("smallTablet")]: {
    marginTop: "84px",
  },
}));

const DashboardStyles = () => null;
export default DashboardStyles;
