import { AppBar, Button } from "@mui/material";
import { styled } from "@mui/system";
import { rem } from "@/utils/px-to-rem";

export const MobileBottomBarContainer = styled(AppBar)(({ theme }) => ({
  height: "50px",
  top: "auto",
  bottom: 0,
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px 20px",
  width: "100%",
  gap: "16px",
  [theme.breakpoints.down("smallPhone")]: {
    gap: "16px",
    padding: "0px 10px",
  },
  [theme.breakpoints.up("smallTablet")]: {
    display: "none",
  },
}));

export const MenuNavigationItem = styled(Button)<{ current: string }>(
  ({ theme, current }) => ({
    position: "relative",
    textTransform: "uppercase",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: rem(16),
    ...(current === "true"
      ? {
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            backgroundColor: theme.palette.secondary.main,
          },
        }
      : {}),
  })
);
