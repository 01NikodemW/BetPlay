import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

export const AllLeaguesCard = styled(Card)(() => ({
  maxHeight: "calc(100vh - 200px)",
  overflowY: "auto",
}));

export const AllLeaguesHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const CountriesContainer = styled(Box)(() => ({}));

export const FlagBoxWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "50px",
}));
interface FlagBox {
  src: string;
}

export const NationFlagBox = styled(Box)<FlagBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
}));

export const CountryNameText = styled(Button)(({ theme }) => ({
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
    height: "2px",
    backgroundColor: theme.palette.secondary.main,
    transform: "scaleX(0)",
    transition: "transform .3s ease",
    transformOrigin: "left",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
}));

export const StyledAccordion = styled(Accordion)(() => ({
  boxShadow: "none",
  "&.Mui-expanded": {
    transition: "margin 0.1s linear",
  },
  "& .MuiAccordionSummary-root.Mui-expanded": {
    transition: "min-height 0.1s linear",
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  "& .MuiAccordionSummary-content": {
    display: "flex",
    alignItems: "center",
  },
}));

export const LeagueFlagBox = styled(Box)<FlagBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
}));

export const LeagueWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const LeagueNameButton = styled(Button)<{ isselected: string }>(
  ({ theme, isselected }) => ({
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
      height: "2px",
      backgroundColor: theme.palette.secondary.main,
      transform: isselected === "true" ? "scaleX(1)" : "scaleX(0)",
      transition: "transform .3s ease",
      transformOrigin: "left",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  })
);
