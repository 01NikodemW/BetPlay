import { FC } from "react";
import { StatBox, StatTypography } from "./styles";
import { useTranslation } from "react-i18next";
import { ExtractedStats } from "@/types/extracted-stats";
import { Typography } from "@mui/material";

interface SingleStatProps {
  stat: ExtractedStats;
}

const SingleStat: FC<SingleStatProps> = ({ stat }) => {
  const { t } = useTranslation();

  return (
    <StatBox>
      <Typography variant="h6">
        {stat.homeValue ? stat.homeValue : 0}
      </Typography>
      <StatTypography>{t(stat.type)}</StatTypography>
      <Typography variant="h6">
        {stat.awayValue ? stat.awayValue : 0}
      </Typography>
    </StatBox>
  );
};

export default SingleStat;
