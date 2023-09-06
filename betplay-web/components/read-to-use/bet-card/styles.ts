import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const BetContainer = styled(Card)<{
  expanded: string;
  mainpage: string;
  circleiconclicked: string;
}>(({ theme, expanded, mainpage, circleiconclicked }) => ({
  height: expanded === "true" ? "450px" : "320px",
  transition: "height 0.3s ease-in-out",
  backgroundColor: theme.palette.background.paper,
  flexDirection: "column",
  display: "flex",
  width: "22%",
  position: "sticky",
  top: mainpage === "true" ? 120 : 320,
  marginLeft: mainpage === "true" ? 0 : "16px",
  borderRadius: "16px",
  marginTop: mainpage === "true" ? "124px" : "16",
  zIndex: 100,

  [theme.breakpoints.down("tablet")]: {
    position: "fixed",
    width: "50%",
    zIndex: 1000,
    margin: 0,
    right: 0,
    top: "auto",
    bottom: 110,
    display: circleiconclicked === "true" ? "flex" : "none",
  },
  [theme.breakpoints.down("smallTablet")]: {
    width: "70%",
    bottom: 60,
  },
  [theme.breakpoints.down("phone")]: {
    width: "100%",
  },
}));

export const HeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
}));

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const CloseBetContainerButton = styled(IconButton)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("tablet")]: {
    display: "flex",
  },
}));

export const FirstTextBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SecondTextBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
}));

export const StyledTextField = styled(TextField)(() => ({
  marginBottom: "16px",
}));

export const StyledButton = styled(Button)(() => ({
  marginBottom: "16px",
}));

export const BetDetailsContainer = styled(Box)<{ expanded: string }>(
  ({ theme, expanded }) => ({
    height: expanded === "true" ? "200px" : 0,
    overflow: "scroll",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    flexDirection: "column",
    display: "flex",
    visibility: expanded === "true" ? "visible" : "hidden",
  })
);

export const BetBox = styled(Box)<{ last: string }>(({ theme, last }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderBottom:
    last === "true"
      ? `8px solid transparent`
      : `1px solid ${theme.palette.secondary.main}}`,
  marginTop: "8px",
}));

export const BetBottomBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
}));

export const TopTypography = styled(Typography)(() => ({
  marginTop: "8px",
}));

export const MobileBetButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  border: `4px solid ${theme.palette.text.primary}`,
  fontWeight: "bold",
  width: "64px",
  height: "64px",
  position: "fixed",
  right: "16px",
  bottom: "64px",
  zIndex: 2000,
}));
