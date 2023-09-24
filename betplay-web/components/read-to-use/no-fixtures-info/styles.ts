import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px",
}));

export const NotFoundIcon = styled(TimerOutlinedIcon)(({ theme }) => ({
  width: rem(50),
  height: rem(50),
  padding: rem(5),
  borderRadius: "50%",
  backgroundColor: theme.palette.secondary.main,
  marginBottom: rem(20),
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
}));
