import React, { FC } from "react";

import { LineupDetails } from "@/types/fixture-details/lienup-details";
import PlayerElement from "../player-element";
import { SubstitutesBox, SubstitutesHeader } from "./styles";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

interface SubstitutesSectionProps {
  lineup: LineupDetails[];
  currentFilter: string;
}

const SubstitutesSection: FC<SubstitutesSectionProps> = ({
  lineup,
  currentFilter,
}) => {
  const { t } = useTranslation();
  return (
    <Box>
      <SubstitutesHeader variant="h2">{t("Bench")}</SubstitutesHeader>
      <SubstitutesBox>
        {lineup.map((player, index) => (
          <PlayerElement
            key={index}
            currentFilter={currentFilter}
            lineupPlayer={player}
          />
        ))}
      </SubstitutesBox>
    </Box>
  );
};

export default SubstitutesSection;
