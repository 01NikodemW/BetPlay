import React, { FC } from "react";
import { LineupDetails } from "@/types/fixture-details/lienup-details";
import { CapitanSign, LineupPlayerBox, PlayerName } from "./styles";

interface PlayerElementProps {
  lineupPlayer: LineupDetails | undefined;
}

const PlayerElement: FC<PlayerElementProps> = ({ lineupPlayer }) => {
  if (!lineupPlayer) return null;

  console.log(
    "koko ",
    lineupPlayer.player.name,
    " ",
    lineupPlayer.playerDetails?.statistics[0].games?.captain
  );
  const checkIfGoalKeeper = () => {
    if (lineupPlayer.player.grid === "1:1") {
      return "true";
    }
    return "false";
  };

  return (
    <LineupPlayerBox src={lineupPlayer.playerDetails?.player.photo || ""}>
      {lineupPlayer.playerDetails?.statistics[0].games?.captain && (
        <CapitanSign>C</CapitanSign>
      )}
      <PlayerName goalkeeper={checkIfGoalKeeper()}>
        {lineupPlayer.player.name.split(" ").pop()}
      </PlayerName>
    </LineupPlayerBox>
  );
};

export default PlayerElement;
