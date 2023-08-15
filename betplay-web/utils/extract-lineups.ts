import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { LineupDetails } from "@/types/fixture-details/lienup-details";
import { PlayerWrapper } from "@/types/fixture-details/lineup";
import { PlayerApiDto } from "@/types/fixture-details/player";

export function extractTeams(fixtureDetails: FixtureDetails): {
  homeXI: LineupDetails[];
  homeSubstitutes: LineupDetails[];
  awayXI: LineupDetails[];
  awaySubstitutes: LineupDetails[];
} {
  const homeLineup = fixtureDetails.lineups?.find(
    (lineup) => lineup.team.id === fixtureDetails.teams.home.id
  );
  const awayLineup = fixtureDetails.lineups?.find(
    (lineup) => lineup.team.id === fixtureDetails.teams.away.id
  );
  const homePlayersDetails = fixtureDetails.players?.find(
    (player) => player.team.id === fixtureDetails.teams.home.id
  )?.players;
  const awayPlayersDetails = fixtureDetails.players?.find(
    (player) => player.team.id === fixtureDetails.teams.away.id
  )?.players;

  const extractPlayerInfo = (
    lineupPlayers: PlayerWrapper[],
    playerDetails: PlayerApiDto[] | undefined
  ) => {
    return lineupPlayers.map((lineupPlayer) => {
      const details = playerDetails?.find(
        (detail) => detail.player.id === lineupPlayer.player.id
      );
      return {
        player: lineupPlayer.player,
        playerDetails: details,
      };
    });
  };

  const homeXI = homeLineup
    ? extractPlayerInfo(homeLineup.startXI, homePlayersDetails)
    : [];
  const homeSubstitutes = homeLineup
    ? extractPlayerInfo(homeLineup.substitutes, homePlayersDetails)
    : [];
  const awayXI = awayLineup
    ? extractPlayerInfo(awayLineup.startXI, awayPlayersDetails)
    : [];
  const awaySubstitutes = awayLineup
    ? extractPlayerInfo(awayLineup.substitutes, awayPlayersDetails)
    : [];

  return { homeXI, homeSubstitutes, awayXI, awaySubstitutes };
}
