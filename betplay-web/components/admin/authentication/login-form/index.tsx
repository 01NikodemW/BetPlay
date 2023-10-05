import {
  BetText,
  LogoWrapper,
  PlayText,
  StyledCard,
  StyledTextField,
} from "./styles";
import { StyledOutlinedButton } from "@/components/read-to-use/styles";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Credentials } from "@/types/authentication/credentials";

const LoginForm = () => {
  const { t } = useTranslation();

  const initialLoginValues: Credentials = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialLoginValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledCard>
      <LogoWrapper>
        <BetText variant="h1">Bet</BetText>
        <PlayText variant="h1">Play</PlayText>
      </LogoWrapper>
      <StyledTextField
        fullWidth
        label={t("Email")}
        {...formik.getFieldProps("email")}
      />
      <StyledTextField
        fullWidth
        label={t("Password")}
        {...formik.getFieldProps("password")}
        type="password"
      />
      <StyledOutlinedButton fullWidth variant="contained">
        {t("Log in")}
      </StyledOutlinedButton>
    </StyledCard>
  );
};

export default LoginForm;
