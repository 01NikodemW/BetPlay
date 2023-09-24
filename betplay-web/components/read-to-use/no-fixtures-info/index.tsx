import { useTranslation } from "react-i18next";
import { NotFoundIcon, StyledBox, StyledTypography } from "./styles";

const NoFixturesFound = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <NotFoundIcon />
      <StyledTypography>{t("No fixtures were found")}</StyledTypography>
    </StyledBox>
  );
};

export default NoFixturesFound;
