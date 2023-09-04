import { rem } from "@/utils/px-to-rem";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const FiltersSectionBox = styled(Box)(() => ({}));

export const FilterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "70px",
  border: `1px solid ${theme.palette.background.default}`,
  cursor: "pointer",
  fontWeight: 600,

  [theme.breakpoints.down("desktop")]: {
    height: "100px",
  },

  [theme.breakpoints.down("tablet")]: {
    height: "70px",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: rem(20),
  fontWeight: 600,
  [theme.breakpoints.down("phone")]: {
    fontSize: rem(16),
  },
  [theme.breakpoints.down("smallPhone")]: {
    fontSize: rem(14),
  },
}));

export const StyledGrid = styled(Grid)<{
  index?: string;
}>(({ theme, index }) => ({
  // color: "red",

  [theme.breakpoints.down("tablet")]: {
    // color: "blue",
  },

  "&.MuiGrid-item": {
    padding: Number(index) < 4 ? "16px 0 0 0" : 0,
    [theme.breakpoints.down("largeDesktop")]: {
      padding: Number(index) < 3 ? "16px 0 0 0" : 0,
    },
    [theme.breakpoints.down("desktop")]: {
      padding: Number(index) < 4 ? "16px 0 0 0" : 0,
    },

    [theme.breakpoints.down("tablet")]: {
      padding: Number(index) < 4 ? "16px 0 0 0" : 0,
    },
    [theme.breakpoints.down("phone")]: {
      padding: Number(index) < 3 ? "16px 0 0 0" : 0,
    },
  },
}));
