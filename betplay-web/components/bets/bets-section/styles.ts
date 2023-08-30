import { rem } from "@/utils/px-to-rem";
import { Box, Tab, Tabs } from "@mui/material";
import { styled } from "@mui/system";

export const BetsSectionContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  minWidth: "720px",
  borderRadius: "16px",
  padding: "24px",
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTab = styled(Tab)(() => ({
  fontSize: rem(16),
  fontWeight: 700,
  textTransform: "none",
}));

export const StyledTabs = styled(Tabs)(() => ({
  marginBottom: "16px",
}));
