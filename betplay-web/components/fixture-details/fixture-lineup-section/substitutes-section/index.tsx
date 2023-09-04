import React, { FC } from "react";

import { LineupDetails } from "@/types/fixture-details/lienup-details";
import PlayerElement from "../player-element";
import { StyledBox, SubstitutesBox, SubstitutesHeader } from "./styles";
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
    <StyledBox>
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
    </StyledBox>
  );
};

export default SubstitutesSection;
