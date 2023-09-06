import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  width: "100%",
  zIndex: 999,

  [theme.breakpoints.down("smallTablet")]: {
    marginBottom: "50px",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    padding: "10px 20px",
  },
}));

export const AllRightsReservedWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const DesktopWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("smallTablet")]: {
    display: "none",
  },
}));

export const MobileWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("phone")]: {
    flexDirection: "column",
    justifyContent: "center",
  },
  [theme.breakpoints.up("smallTablet")]: {
    display: "none",
  },
}));

export const ContactUsButton = styled(Button)(({ theme }) => ({
  fontWeight: "600",

  "&:hover": {
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: theme.palette.secondary.main,
    transform: "scaleX(0)",
    transition: "transform .3s ease",
    transformOrigin: "left",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

export const SocialMediaIconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "8px",
  [theme.breakpoints.down("smallTablet")]: {
    alignSelf: "end",
  },
  [theme.breakpoints.down("phone")]: {
    alignSelf: "center",
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: "1.5px solid",
  borderColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    borderColor: theme.palette.secondary.light,
  },
}));
