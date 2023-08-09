import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface PhotoBox {
  src: string;
}

const elementSize = 60;

export const PlayerBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const PhotoBox = styled(Box)<PhotoBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: `${elementSize}px`,
  height: `${elementSize}px`,
  borderRadius: "50%",
  zIndex: 99,
  position: "relative",
}));

export const CapitanSign = styled(Typography)(() => ({
  backgroundColor: "yellow",
  borderRadius: "50%",
  zIndex: 100,
  position: "absolute",
  width: "20px",
  height: "20px",
  fontSize: rem(14),
  textAlign: "center",
  right: 0,
  bottom: 0,
}));

export const PlayerName = styled(Typography)(() => ({
  backgroundColor: "black",
  color: "white",
  zIndex: 99,
  fontSize: rem(12),
  padding: "2px",
  borderRadius: "12px",
  marginTop: "4px",
  textAlign: "center",
}));
