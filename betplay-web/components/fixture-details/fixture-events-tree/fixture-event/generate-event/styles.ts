import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const PlayerTypography = styled(Typography)(() => ({}));

export const AssistTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

interface FlagBox {
  homeoraway: string;
}

export const PlayerAssistBox = styled(Box)<FlagBox>(({ homeoraway }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: homeoraway === "away" ? "start" : "end",
  ...(homeoraway === "home" ? { marginRight: "16px" } : { marginLeft: "16px" }),
}));

export const EventBox = styled(Box)<FlagBox>(({ homeoraway, theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  padding: "8px 16px",

  ...(homeoraway === "home" ? { marginRight: "16px" } : { marginLeft: "16px" }),
}));
