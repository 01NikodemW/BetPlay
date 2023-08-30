import { BottomTypography, InfoContainer, TopTypography } from "./styles";
import { useTranslation } from "react-i18next";

const NoBettingSlipInfo = () => {
  const { t } = useTranslation();
  return (
    <InfoContainer>
      <TopTypography variant="h5">{t("No betting slips")}</TopTypography>
      <BottomTypography variant="h6">
        {t("Go to fixture details to make a bet")}
      </BottomTypography>
    </InfoContainer>
  );
};

export default NoBettingSlipInfo;
