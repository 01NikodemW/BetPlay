import { Box, Button, IconButton, Typography } from "@mui/material";
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

export const ButtonBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "128px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "end",
}));

export const LeftButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  left: "0",
  width: "50%",
  borderTopRightRadius: "0",
  borderBottomRightRadius: "0",
  borderTopLeftRadius: "16px",
  borderBottomLeftRadius: "16px",
  backgroundColor: theme.palette.contrastBackground.default,
  padding: 0,
  height: "100%",

  "&:hover": {
    backgroundColor: theme.palette.contrastBackground.weak,
  },
}));
export const RightButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: "0",
  width: "50%",
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
  borderTopRightRadius: "16px",
  borderBottomRightRadius: "16px",
  padding: 0,
  backgroundColor: theme.palette.contrastBackground.default,
  height: "100%",
  "&:hover": {
    backgroundColor: theme.palette.contrastBackground.weak,
  },
}));
export const ButtonText = styled(Typography)(({ theme }) => ({
  zIndex: 100,
  color: theme.palette.background.default,
}));
