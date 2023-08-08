import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const TeamLineupBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '400px',
  height: '400px',
  border: '2px solid black',
  padding: '20px',
}));

export const Line = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const Player = styled(Box)(({ theme }) => ({
  margin: '0 10px',
  background: 'blue',
  color: 'white',
  padding: '5px',
  borderRadius: '50%',
}));
