import React, { FC } from "react";
import { LineupDetails } from "@/types/fixture-details/lienup-details";
import { CapitanSign, PhotoBox, PlayerBox, PlayerName } from "./styles";

interface PlayerElementProps {
  lineupPlayer: LineupDetails | undefined;
  currentFilter: string;
}

const PlayerElement: FC<PlayerElementProps> = ({
  lineupPlayer,
  currentFilter,
}) => {
  if (!lineupPlayer) return null;

  const generateLabel = () => {
    switch (currentFilter) {
      case "Rating":
        return lineupPlayer.playerDetails?.statistics[0].games?.rating || "N/A";
      case "Offsides":
        return lineupPlayer.playerDetails?.statistics[0].offsides || "0";
      case "Shots":
        return lineupPlayer.playerDetails?.statistics[0].shots?.total || "0";
      case "Goals":
        return lineupPlayer.playerDetails?.statistics[0].goals?.total || "0";
      case "Assists":
        return lineupPlayer.playerDetails?.statistics[0].goals?.assists || "0";
      case "Saved goals":
        return lineupPlayer.playerDetails?.statistics[0].goals?.saves || "0";
      case "Passes":
        return lineupPlayer.playerDetails?.statistics[0].passes?.total || "0";
      case "Tackles":
        return lineupPlayer.playerDetails?.statistics[0].tackles?.total || "0";
      case "Yellow cards":
        return lineupPlayer.playerDetails?.statistics[0].cards?.yellow || "0";
      case "Red cards":
        return lineupPlayer.playerDetails?.statistics[0].cards?.red || "0";
      case "Fouls":
        return (
          lineupPlayer.playerDetails?.statistics[0].fouls?.committed || "0"
        );
      case "Dribbles":
        return (
          lineupPlayer.playerDetails?.statistics[0].dribbles?.attempts || "0"
        );

      default:
        return lineupPlayer.player.name.split(" ").pop();
    }
  };

  return (
    <PlayerBox>
      <PhotoBox src={lineupPlayer.playerDetails?.player.photo || ""}>
        {lineupPlayer.playerDetails?.statistics[0].games?.captain && (
          <CapitanSign>C</CapitanSign>
        )}
      </PhotoBox>
      <PlayerName>{generateLabel()}</PlayerName>
    </PlayerBox>
  );
};

export default PlayerElement;
