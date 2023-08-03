import { InputAdornment, InputLabel, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Search } from '@/icons/search';
import {
  SearchSectionWrapper,
  StyledTextField,
  SelectSectionWrapper,
  FormControlOne,
  FormControlTwo,
} from './styles';

const SearchSection = () => {
  const { t } = useTranslation();

  return (
    <SearchSectionWrapper>
      <StyledTextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        placeholder={t('Search') || ''}
      />
      <SelectSectionWrapper>
        <FormControlOne>
          <InputLabel id="first-select-label">{t('Status')}</InputLabel>
          <Select
            id="first-select"
            label={t('Status')}
            labelId="first-select-label"
          >
            <MenuItem value={1}>{t('High')}</MenuItem>
            <MenuItem value={0}>{t('Low')}</MenuItem>
          </Select>
        </FormControlOne>
        <FormControlTwo>
          <InputLabel id="second-select-label">{t('Status')}</InputLabel>
          <Select
            id="second-select"
            label={t('Status')}
            labelId="second-select-label"
          >
            <MenuItem value={1}>{t('High')}</MenuItem>
            <MenuItem value={0}>{t('Low')}</MenuItem>
          </Select>
        </FormControlTwo>
      </SelectSectionWrapper>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
