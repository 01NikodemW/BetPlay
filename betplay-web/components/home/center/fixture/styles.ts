import { Box, Card, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureCard = styled(Card)(() => ({
  width: "100%",
  padding: "16px 24px",
}));

export const TopSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "24px",
}));

export const BottomSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const TeamsSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const TeamContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

interface FlagBox {
  src: string;
  isMarginRight?: boolean;
}

export const TeamLogo = styled(Box)<FlagBox>(({ src, isMarginRight }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "20px",
  height: "20px",
  ...(isMarginRight ? { marginRight: "8px" } : { marginLeft: "8px" }),
}));

export const TeamNameTypography = styled(Typography)(() => ({}));

export const TimeTypography = styled(Typography)(() => ({
  paddingLeft: "8px",
  paddingRight: "8px",
}));
