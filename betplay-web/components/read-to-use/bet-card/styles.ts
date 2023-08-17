import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BetContainer = styled(Card)<{ expanded: string }>(
  ({ theme, expanded }) => ({
    height: expanded === "true" ? "500px" : "300px",
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    flexDirection: "column",
    display: "flex",
    position: "sticky",
    width: "22%",
    top: 120,
    marginTop: "124px",
    borderRadius: "16px",
  })
);

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginBottom: "16px",
}));

export const FirstTextBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SecondTextBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
}));

export const StyledTextField = styled(TextField)(() => ({
  marginBottom: "16px",
}));

export const StyledButton = styled(Button)(() => ({
  marginBottom: "16px",
}));

export const BetDetailsContainer = styled(Box)<{ expanded: string }>(
  ({ theme, expanded }) => ({
    height: expanded === "true" ? "200px" : 0,
    transition: "height 0.3s ease-in-out",
    backgroundColor: theme.palette.background.paper,
    flexDirection: "column",
    display: "flex",
    visibility: expanded === "true" ? "visible" : "hidden",
  })
);
