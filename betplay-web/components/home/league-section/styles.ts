import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const LeftMenuContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "23%",
  gap: "16px",
  position: "sticky",
  top: 120,
  maxHeight: "calc(100vh - 136px)",
  marginTop: "124px",
  marginLeft: "16px",
}));
