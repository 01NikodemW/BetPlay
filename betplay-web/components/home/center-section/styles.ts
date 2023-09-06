import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const CenterSectionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  gap: "16px",
  height: "100%",
  marginLeft: "16px",
  marginRight: "16px",
  marginTop: "124px",
  [theme.breakpoints.down("desktop")]: {
    width: "668px",
    marginLeft: "50px",
    marginRight: "50px",
  },
  [theme.breakpoints.down("tablet")]: {
    width: "100%",
    marginLeft: "16px",
    marginRight: "16px",
  },
}));
