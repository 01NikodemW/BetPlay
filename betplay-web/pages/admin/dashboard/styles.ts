import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "124px",
  gap: "48px",
  marginLeft: "24px",
  marginRight: "24px",

  [theme.breakpoints.down("smallTablet")]: {
    marginTop: "84px",
  },
}));

const AuthenticationStyles = () => null;
export default AuthenticationStyles;
