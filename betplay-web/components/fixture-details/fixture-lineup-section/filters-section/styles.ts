import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
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
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: rem(20),
  fontWeight: 600,
}));
