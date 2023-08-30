import { rem } from "@/utils/px-to-rem";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";

export const BetsSectionContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("smallTablet")]: {
    width: "100%",
    margin: "0px 16px",
  },
}));

export const StyledTab = styled(Tab)(() => ({
  fontSize: rem(16),
  fontWeight: 700,
  textTransform: "none",
}));

export const StyledTabs = styled(Tabs)(() => ({
  marginBottom: "16px",
}));
