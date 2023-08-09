import { rem } from "@/utils/px-to-rem";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface PhotoBox {
  src: string;
}

const elementSize = 60;

export const LineupPlayerBox = styled(Box)<PhotoBox>(({ src }) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: `${elementSize}px`,
  height: `${elementSize}px`,
  margin: "0 30px",
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

interface PlayerName {
  goalkeeper: string;
}

export const PlayerName = styled(Typography)<PlayerName>(({ goalkeeper }) => ({
  backgroundColor: "black",
  color: "white",
  zIndex: 99,
  position: "absolute",
  fontSize: rem(12),
  width: `${elementSize}px`,
  padding: "2px",
  bottom: goalkeeper === "true" ? 0 : "-30px",
  borderRadius: "12px",
  left: goalkeeper === "true" ? `${elementSize}px` : 0,
  textAlign: "center",
}));
