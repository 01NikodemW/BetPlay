import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";

export const FixtureCard = styled(Card)(({ theme }) => ({
  width: "100%",
  padding: "24px 24px",
  backgroundColor: theme.palette.contrastBackground.default,
  paddingTop: "16px",
}));

export const TopSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "24px",
}));

export const BottomSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("phone")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

export const DateAndRoundTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
}));

export const TeamsSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const TeamContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: "space-between",
  // width: "100%",
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
  })
);
export const TeamNameTypography = styled(Typography)<{
  isawayteam?: string;
}>(({ isawayteam, theme }) => ({
  textAlign: isawayteam === "true" ? "right" : "left",
  color: theme.palette.background.default,

  [theme.breakpoints.down("phone")]: {
    fontSize: rem(16),
    wordWrap: "break-word",
    overflowWrap: "break-word",
    hyphens: "auto",
  },
}));

export const ScoreTypography = styled(Typography)(({ theme }) => ({
  paddingLeft: "12px",
  paddingRight: "12px",
  color: theme.palette.background.default,
  whiteSpace: "nowrap",
}));

export const LiveDetailsBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const LiveText = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
  backgroundColor: theme.palette.error.main,
  paddingLeft: "4px",
  borderRadius: "6px",
  marginRight: "8px",
  paddingRight: "4px",
  fontWeight: 700,
  fontSize: rem(12),
}));

export const TimeAndShortTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
  [theme.breakpoints.down("smallPhone")]: {
    display: "none",
  },
}));
