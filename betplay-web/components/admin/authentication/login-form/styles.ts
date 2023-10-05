import { Box, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCard = styled(Card)(({ theme }) => ({
  width: "350px",
  backgroundColor: theme.palette.background.paper,
  padding: "48px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const LogoWrapper = styled(Box)(() => ({
  display: "flex",
  marginBottom: "48px",
}));

export const BetText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const PlayText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontStyle: "italic",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: "24px",
  width: "100%",
}));
