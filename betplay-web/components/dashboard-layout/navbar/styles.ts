import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const NavbarContainer = styled(Box)(() => ({
  height: "100px",
  backgroundColor: "red",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  width: "100%",
}));

export const LogoWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const BetText = styled(Typography)(() => ({
  color: "white",
}));

export const PlayText = styled(Typography)(() => ({
  color: "purple",
  fontStyle: "italic",
}));

export const MenuNavigationWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
}));

export const MenuNavigationItem = styled(Typography)(() => ({
  textTransform: "uppercase",
}));

export const AvaterWrapper = styled(Box)(() => ({
  display: "flex",
}));
