import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const VerticalBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const AuthenticationStyles = () => null;
export default AuthenticationStyles;
