import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "100px",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  paddingRight: "20px",
  width: "100%",
}));

export const AllRightsReservedWrapper = styled(Box)(() => ({
  display: "flex",
}));

export const ContactUsButton = styled(Button)(({ theme }) => ({
  border: "1.5px solid",
  borderRadius: "16px",
  borderColor: theme.palette.secondary.main,
  "&:hover": {
    borderColor: theme.palette.secondary.light,
  },
  fontWeight: "600",
}));

export const SocialMediaIconsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "8px",
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: "1.5px solid",
  borderColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  "&:hover": {
    borderColor: theme.palette.secondary.light,
  },
}));
