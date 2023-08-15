import { rem } from "@/utils/px-to-rem";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const FixtureNavigationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  right: 0,
  top: "124px",
  zIndex: 101,
}));

interface IconButtonProps {
  visible: string;
}

export const StyledIconButton = styled(IconButton)<IconButtonProps>(
  ({ visible, theme }) => ({
    width: rem(64),
    height: rem(48),
    color:
      visible === "true" ? theme.palette.secondary.main : theme.palette.divider,

    "&:hover": {
      backgroundColor: "transparent",
    },
  })
);
