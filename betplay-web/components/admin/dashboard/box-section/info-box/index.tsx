import { FC } from "react";
import { BottomText, StyledCard, TopText } from "./styles";
import { useTranslation } from "react-i18next";

interface InfoBoxProps {
  title: string;
  value: string;
}

const InfoBox: FC<InfoBoxProps> = ({ title, value }) => {
  const { t } = useTranslation();
  return (
    <StyledCard>
      <TopText>{t(title)}</TopText>
      <BottomText>{t(value)}</BottomText>
    </StyledCard>
  );
};

export default InfoBox;
