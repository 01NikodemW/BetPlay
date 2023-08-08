import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { TeamLineupBox, Player, Line } from "./styles";

interface TeamLineupProps {
  fixture: FixtureDetails;
  homeOrAway: "home" | "away";
}

const TeamLineup: FC<TeamLineupProps> = ({ fixture, homeOrAway }) => {
  const { t } = useTranslation();
  const startXI = fixture.lineups ? fixture.lineups[homeOrAway === "away" ? 0 : 1].startXI : []; // Adjust based on homeOrAway

  const formation = {
    "5:1": startXI.filter((p) => p.player.grid?.startsWith("5")),
    "4:1": startXI.filter((p) => p.player.grid?.startsWith("4")),
    "3:1": startXI.filter((p) => p.player.grid?.startsWith("3")),
    "2:1": startXI.filter((p) => p.player.grid?.startsWith("2")),
    "1:1": [startXI.find((p) => p.player.grid === "1:1")],
  };

  return (
    <TeamLineupBox>
      {Object.values(formation).map((line, index) => (
        <Line key={index}>
          {line.slice().reverse().map((player, index) => ( // Reverse the players within each line
            <Player key={index}>a</Player>
          ))}
        </Line>
      ))}
    </TeamLineupBox>
  );
};

export default TeamLineup;
