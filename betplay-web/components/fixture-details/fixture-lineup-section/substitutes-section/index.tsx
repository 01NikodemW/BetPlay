import React, { FC } from "react";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

import { LineupDetails } from "@/types/fixture-details/lienup-details";
import PlayerElement from "../player-element";
import { SubstitutesBox } from "./styles";

interface SubstitutesSectionProps {
  fixture: FixtureDetails;
  lineup: LineupDetails[];
  homeOrAway: "home" | "away";
  currentFilter: string;
}

const SubstitutesSection: FC<SubstitutesSectionProps> = ({
  fixture,
  homeOrAway,
  lineup,
  currentFilter,
}) => {
  return (
    <SubstitutesBox>
      {lineup.map((player, index) => (
        <PlayerElement
          key={index}
          currentFilter={currentFilter}
          lineupPlayer={player}
        />
      ))}
    </SubstitutesBox>
  );
};

export default SubstitutesSection;
