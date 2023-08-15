import React, { FC } from "react";
import {
  TeamLineupBox,
  Line,
  CenterCircle,
  GoalTopBox,
  GoalLeftBox,
  GoalRightBox,
  PenaltyLeftBox,
  PenaltyRightBox,
  PenaltyTopBox,
} from "./styles";
import { LineupDetails } from "@/types/fixture-details/lienup-details";
import PlayerElement from "../player-element";

interface TeamLineupProps {
  lineup: LineupDetails[];
  currentFilter: string;
}

const TeamLineup: FC<TeamLineupProps> = ({ lineup, currentFilter }) => {
  const formation = {
    "5:1": lineup.filter((p) => p.player.grid?.startsWith("5")),
    "4:1": lineup.filter((p) => p.player.grid?.startsWith("4")),
    "3:1": lineup.filter((p) => p.player.grid?.startsWith("3")),
    "2:1": lineup.filter((p) => p.player.grid?.startsWith("2")),
    "1:1": [lineup.find((p) => p.player.grid === "1:1")],
  };

  return (
    <TeamLineupBox>
      <GoalTopBox />
      <GoalLeftBox />
      <GoalRightBox />
      <PenaltyTopBox />
      <PenaltyLeftBox />
      <PenaltyRightBox />
      <CenterCircle />
      {Object.values(formation).map((line, index) => (
        <Line key={index}>
          {line
            .slice()
            .reverse()
            .map((player, index) => (
              <PlayerElement
                key={index}
                currentFilter={currentFilter}
                lineupPlayer={player}
              />
            ))}
        </Line>
      ))}
    </TeamLineupBox>
  );
};

export default TeamLineup;
