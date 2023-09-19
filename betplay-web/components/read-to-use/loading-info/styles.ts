import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px",
}));

export const Ball = styled(SportsSoccerIcon)(({ theme }) => ({
  width: rem(50),
  height: rem(50),
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
  animation: "jump 1s infinite",
  marginBottom: rem(20),
  "@keyframes jump": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0)",
    },
    "40%": {
      transform: "translateY(-30px)",
    },
    "60%": {
      transform: "translateY(-15px)",
    },
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
}));
