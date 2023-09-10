import { useTranslation } from "react-i18next";
import { Ball, StyledBox, StyledTypography } from "./styles";

const LoadingInfo = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <Ball />
      <StyledTypography>{t("Loading...")}</StyledTypography>
    </StyledBox>
  );
};

export default LoadingInfo;
