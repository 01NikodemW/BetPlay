import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";

export const TeamsHeaderSection = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginBottom: "16px",
}));

export const TeamBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const TeamTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("phone")]: {
    display: "none",
  },
}));

interface FlagBox {
  src: string;
  marginrightorleft?: string;
}

export const TeamLogo = styled(Box)<FlagBox>(({ src, marginrightorleft }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: rem(64),
  height: rem(64),

  ...(marginrightorleft === "right"
    ? { marginRight: "32px" }
    : { marginLeft: "32px" }),
}));
