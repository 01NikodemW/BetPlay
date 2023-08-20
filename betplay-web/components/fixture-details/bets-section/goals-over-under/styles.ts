import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";

export const BetOptionsBox = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const BetColumnBox = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: "16px",
}));

export const StyleButton = styled(Button)(() => ({
  flex: 1,
}));
