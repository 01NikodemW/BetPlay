import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const TopSectionWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
}));

export const BottomSectionWrapper = styled(Box)(() => ({
  // Styles for the bottom section
}));

export const YourApplicationText = styled(Typography)(() => ({
  marginBottom: '24px',
}));

const DashboardStyles = () => null;
export default DashboardStyles;
