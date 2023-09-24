import { Typography } from "@mui/material";
import { BottomTypography, InfoContainer } from "./styles";
import { useTranslation } from "react-i18next";

const NoBettingSlipInfo = () => {
  const { t } = useTranslation();
  return (
    <InfoContainer>
      <Typography variant="h5">{t("No betting slips")}</Typography>
      <BottomTypography variant="h6">
        {t("Go to fixture details to make a bet")}
      </BottomTypography>
    </InfoContainer>
  );
};

export default NoBettingSlipInfo;
