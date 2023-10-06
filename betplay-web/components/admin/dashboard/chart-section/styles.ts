import { Box, FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const ContainerBox = styled(Box)(() => ({
  width: "50%",
}));

export const StyledFormControl = styled(FormControl)(() => ({
  justifySelf: "end",
  marginBottom: "24px",
}));

export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "end",
}));
