import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { rem } from '@/utils/px-to-rem';

export const UppercaseButton = styled(Button)(() => ({
  textTransform: 'uppercase',
  fontSize: rem(14),
}));
