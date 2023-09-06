import { rem } from "@/utils/px-to-rem";
import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureCard = styled(Card)(() => ({
  width: "100%",
  padding: "24px 24px",
  paddingTop: "16px",
}));

export const TopSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
}));

export const BottomSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("phone")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

export const TeamsSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const TeamContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
}));

interface FlagBox {
  src: string;
  ismarginright?: string;
}

export const TeamLogo = styled(Box)<FlagBox>(
  ({ src, ismarginright, theme }) => ({
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "20px",
    height: "20px",
    ...(ismarginright === "true"
      ? { marginRight: "8px" }
      : { marginLeft: "8px" }),

    [theme.breakpoints.down("phone")]: {
      width: "24px",
      height: "24px",
    },

    [theme.breakpoints.down("extraSmallPhone")]: {
      display: "none",
    },
  })
);

export const TeamNameTypography = styled(Typography)<{
  isawayteam?: string;
}>(({ isawayteam, theme }) => ({
  textAlign: isawayteam === "true" ? "right" : "left",
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(16),
    wordWrap: "break-word", // 1
    overflowWrap: "break-word", // 2
    hyphens: "auto", // 4 - Note: browser support varies
  },
}));

export const TimeTypography = styled(Typography)(() => ({
  paddingLeft: "8px",
  paddingRight: "8px",
}));
