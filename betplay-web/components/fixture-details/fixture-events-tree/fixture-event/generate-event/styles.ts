import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PlayerTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("extraSmallPhone")]: {
    fontSize: rem(14),
  },
}));

export const AssistTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const PlayerAssistBox = styled(Box)<{
  homeoraway: string;
}>(({ homeoraway, theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: homeoraway === "away" ? "start" : "end",
  ...(homeoraway === "home" ? { marginRight: "16px" } : { marginLeft: "16px" }),
  [theme.breakpoints.down("phone")]: {
    ...(homeoraway === "home" ? { marginRight: "8px" } : { marginLeft: "8px" }),
  },
}));

export const EventBox = styled(Box)<{
  homeoraway: string;
}>(({ homeoraway, theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  padding: "8px 16px",

  ...(homeoraway === "home" ? { marginRight: "16px" } : { marginLeft: "16px" }),

  [theme.breakpoints.down("phone")]: {
    ...(homeoraway === "home" ? { marginRight: "8px" } : { marginLeft: "8px" }),
    padding: "8px 8px",
  },
}));
