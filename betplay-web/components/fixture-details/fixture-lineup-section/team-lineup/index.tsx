import React, { FC } from "react";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
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
  fixture: FixtureDetails;
  lineup: LineupDetails[];
  homeOrAway: "home" | "away";
  currentFilter: string;
}

const TeamLineup: FC<TeamLineupProps> = ({
  fixture,
  homeOrAway,
  lineup,
  currentFilter,
}) => {
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
                lineupPlayer={player}
                currentFilter={currentFilter}
              />
            ))}
        </Line>
      ))}
    </TeamLineupBox>
  );
};

export default TeamLineup;
