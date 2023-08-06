import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";
import PersonIcon from "@mui/icons-material/Person";

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  width: "100%",
}));

export const LogoWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const BetText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const PlayText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontStyle: "italic",
}));

export const MenuNavigationWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "40%",
}));

export const MenuNavigationItem = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: rem(20),

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

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledAvatarIcon = styled(PersonIcon)(({ theme }) => ({
  fontSize: rem(48),
  color: theme.palette.text.primary,
}));

export const StyledIconButton = styled(IconButton)(() => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
}));