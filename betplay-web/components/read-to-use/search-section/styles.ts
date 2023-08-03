import { Box, FormControl, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const SearchSectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '32px',

  [theme.breakpoints.down('phone')]: {
    flexDirection: 'column',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginBottom: '0',

  [theme.breakpoints.down('phone')]: {
    marginBottom: '12px',
  },
}));

export const SelectSectionWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 'auto',

  [theme.breakpoints.down('phone')]: {
    width: '100%',
  },
}));

export const FormControlOne = styled(FormControl)(({ theme }) => ({
  minWidth: '120px',
  marginRight: '32px',
  marginLeft: '32px',
  flex: 1,

  [theme.breakpoints.down('phone')]: {
    marginLeft: '0px',
  },
}));

export const FormControlTwo = styled(FormControl)(() => ({
  minWidth: '120px',
  flex: 1,
}));
