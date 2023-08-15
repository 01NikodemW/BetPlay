import { ExtractedStats } from "@/types/extracted-stats";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

export const extractStats = (
  fixtureDetails: FixtureDetails
): ExtractedStats[] => {
  if (!fixtureDetails.statistics || fixtureDetails.statistics.length !== 2) {
    throw new Error("Expected two statistics arrays for home and away");
  }

  const homeStats = fixtureDetails.statistics[0].statistics;
  const awayStats = fixtureDetails.statistics[1].statistics;

  if (homeStats.length !== awayStats.length) {
    throw new Error("Mismatch in home and away statistics length");
  }

  const desiredStatsOrder = [
    "Ball Possession",
    "expected_goals",
    "Total Shots",
    "Shots on Goal",
    "Shots off Goal",
    "Blocked Shots",
    "Total passes",
    "Passes accurate",
    "Passes %",
    "Corner Kicks",
    "Fouls",
    "Yellow Cards",
    "Red Cards",
    "Goalkeeper Saves",
    "Offsides",
  ];

  const extractedStats: ExtractedStats[] = desiredStatsOrder.map((statType) => {
    const homeStat = homeStats.find((stat) => stat.type === statType);
    const awayStat = awayStats.find((stat) => stat.type === statType);

    if (!homeStat || !awayStat) {
      throw new Error(`Statistics not found for ${statType}`);
    }

    return {
      type: statType,
      homeValue: homeStat.value,
      awayValue: awayStat.value,
    };
  });

  return extractedStats;
};
