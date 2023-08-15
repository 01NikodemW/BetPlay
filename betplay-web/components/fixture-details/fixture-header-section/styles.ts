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
}));


export const LeagueHeaderSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "end",
  height: "90px",
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

export const LeagueLogo = styled(Box)<FlagBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginRight: "16px",

  width: rem(36),
  height: rem(36),
}));

export const LeagueTypography = styled(Typography)(() => ({
  fontSize: rem(16),
}));

export const HomeTeamBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  width: "45%",
}));

export const AwayTeamBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  width: "45%",
}));

export const TeamTypography = styled(Typography)(() => ({
  fontSize: rem(40),
}));
export const ScoreTypography = styled(Typography)(() => ({
  fontSize: rem(64),
  width: "10%",
  textAlign: "center",
}));

interface FlagBox {
  src: string;
  marginrightorleft?: string;
}

export const TeamLogo = styled(Box)<FlagBox>(({ src, marginrightorleft }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: rem(96),
  height: rem(96),

  ...(marginrightorleft === "right"
    ? { marginRight: "32px" }
    : { marginLeft: "32px" }),
}));

export const PenaltyTypography = styled(Typography)(() => ({
  fontSize: rem(16),
}));
