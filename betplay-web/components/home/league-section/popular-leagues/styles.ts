import { Box, Button, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PopularLeaguesCard = styled(Card)(() => ({
  width: "100%",
}));

export const PopularLeaguesHeader = styled(Typography)(() => ({
  marginBottom: "16px",
}));

export const LeagueWrapper = styled(Box)(() => ({
  marginBottom: "8px",
  display: "flex",
  alignItems: "center",
}));

interface FlagBox {
  src: string;
}

export const FlagBoxWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  width: "50px",
}));

export const NationFlagBox = styled(Box)<FlagBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
}));

export const LeagueFlagBox = styled(Box)<FlagBox>(({ src, theme }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: theme.palette.background.paper,
  width: "24px",
  height: "24px",
  padding: "10px",
  borderRadius: "50%",
  border: "1px solid #fff",
  position: "absolute",
  left: "16px",
}));

export const LeagueNameButton = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
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
      transform: selected ? "scaleX(1)" : "scaleX(0)",
      transition: "transform .3s ease",
      transformOrigin: "left",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
    },
  })
);