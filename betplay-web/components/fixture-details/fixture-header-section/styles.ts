import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";

export const FixtureHeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "124px",
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 60%, ${theme.palette.background.default} 100%)`,
  [theme.breakpoints.down("smallTablet")]: {
    marginTop: "84px",
  },
}));

export const LeagueHeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  height: "90px",
  [theme.breakpoints.down("smallTablet")]: {
    height: "70px",
  },
}));

export const LeagueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: `2px solid ${theme.palette.neutral[200]}`,
  backgroundColor: theme.palette.neutral[100],
  borderRadius: "24px",
  padding: "8px 16px",
}));
export const BottomSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "top",
  height: "120px",
}));

export const TeamsHeaderSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "120px",
  paddingTop: "20px",
}));

export const LeagueLogo = styled(Box)<{
  src: string;
}>(({ src, theme }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginRight: "16px",

  width: rem(36),
  height: rem(36),
  [theme.breakpoints.down("tablet")]: {
    width: rem(24),
    height: rem(24),
  },
}));

export const LeagueTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(16),
  [theme.breakpoints.down("smallPhone")]: {
    fontSize: rem(14),
  },
}));

export const HomeTeamBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "45%",
  [theme.breakpoints.down("smallTablet")]: {
    flexDirection: "column-reverse",
  },
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(16),
    width: "35%",
  },
}));

export const AwayTeamBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "45%",
  [theme.breakpoints.down("smallTablet")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(16),
    width: "35%",
  },
}));

export const TeamTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(40),
  textAlign: "center",
  [theme.breakpoints.down("tablet")]: {
    fontSize: rem(32),
  },
  [theme.breakpoints.down("smallTablet")]: {
    fontSize: rem(24),
  },

  [theme.breakpoints.down("phone")]: {
    fontSize: rem(20),
  },
  [theme.breakpoints.down("smallPhone")]: {
    fontSize: rem(16),
  },
}));
export const ScoreTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(64),
  width: "10%",
  textAlign: "center",
  [theme.breakpoints.down("tablet")]: {
    fontSize: rem(48),
  },
  [theme.breakpoints.down("phone")]: {
    width: "30%",
  },
}));

export const TeamLogo = styled(Box)<{
  src: string;
  marginrightorleft?: string;
}>(({ src, marginrightorleft, theme }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: rem(96),
  height: rem(96),

  ...(marginrightorleft === "right"
    ? { marginRight: "32px" }
    : { marginLeft: "32px" }),

  [theme.breakpoints.down("tablet")]: {
    width: rem(84),
    height: rem(84),
    ...(marginrightorleft === "right"
      ? { marginRight: "24px" }
      : { marginLeft: "24px" }),
  },

  [theme.breakpoints.down("smallTablet")]: {
    ...(marginrightorleft === "right"
      ? { marginRight: "16px" }
      : { marginLeft: "16px" }),
  },
}));

export const PenaltyTypography = styled(Typography)(() => ({
  fontSize: rem(16),
}));
