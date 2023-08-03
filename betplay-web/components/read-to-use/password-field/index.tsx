import { IconButton, InputAdornment, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeClosed } from '@/icons/eye-closed';
import { EyeOpen } from '@/icons/eye-open';
import { Lock } from '@/icons/lock';

interface PasswordFieldProps {
  hidePasswordOnBlur?: boolean;
  showPasswordOnFocus?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showStartAdornment?: boolean;
  [key: string]: any;
}

const PasswordField: FC<PasswordFieldProps> = (props) => {
  const {
    hidePasswordOnBlur,
    showPasswordOnFocus,
    onChange,
    onFocus,
    onBlur,
    showStartAdornment,
    ...other
  } = props;

  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const changeVisibilityHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const changeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsVisible((prev): boolean => prev && e.target.value.length > 0);

    if (typeof onChange === 'function') return onChange.call(e.target, e);
  };

  const onFocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (showPasswordOnFocus) {
      setIsVisible(true);
    }

    if (typeof onFocus === 'function') return onFocus.bind(event.target, event);
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (hidePasswordOnBlur) {
      setIsVisible(false);
    }

    if (typeof onBlur === 'function') return onBlur.bind(event.target, event);
  };

  return (
    <TextField
      {...other}
      InputProps={{
        startAdornment: showStartAdornment ? (
          <InputAdornment position="start">
            <Lock />
          </InputAdornment>
        ) : null,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              {...(props.size ? { size: props.size } : {})}
              onClick={changeVisibilityHandler}
              // disabled={props.value.length === 0}
            >
              {isVisible ? <EyeClosed /> : <EyeOpen />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      placeholder={t('Password') || 'Password'}
      type={isVisible ? 'text' : 'password'}
      onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
        onBlurHandler(event)
      }
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        changeInputValueHandler(event)
      }
      onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
        onFocusHandler(event)
      }
    />
  );
};

export default PasswordField;
