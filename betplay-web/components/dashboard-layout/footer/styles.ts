import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  width: "100%",
  zIndex: 999,
}));

export const AllRightsReservedWrapper = styled(Box)(() => ({
  display: "flex",
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

export const SocialMediaIconsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: "1.5px solid",
  borderColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    borderColor: theme.palette.secondary.light,
  },
}));
