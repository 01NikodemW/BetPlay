import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
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
  [theme.breakpoints.down("smallTablet")]: {
    height: "60px",
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100px",
  [theme.breakpoints.down("smallTablet")]: {
    width: "auto",
  },
}));

export const BetText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const PlayText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontStyle: "italic",
}));

export const MenuNavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  [theme.breakpoints.down("smallTablet")]: {
    display: "none",
  },
}));

export const MenuNavigationItem = styled(Button)<{ current: string }>(
  ({ theme, current }) => ({
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
      // transform: "scaleX(0)",
      transition: "transform .3s ease",
      transformOrigin: "left",
      transform: current === "true" ? "scaleX(1)" : "scaleX(0)",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  })
);

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  width: "100px",

  [theme.breakpoints.down("smallTablet")]: {
    width: "auto",
  },
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

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "4px",

    border: `1px solid ${theme.palette.secondary.main}`,
  },
  "& .MuiList-root": {
    padding: 0,
  },
}));

export const StyledMenuItem = styled(MenuItem)<{
  last: string;
}>(({ theme, last }) => ({
  fontSize: rem(16),
  padding: "8px 20px",
  borderBottom:
    last === "true" ? "" : `1px solid ${theme.palette.secondary.main}`,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
}));
