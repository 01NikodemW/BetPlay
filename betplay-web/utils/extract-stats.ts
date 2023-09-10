import { ExtractedStats } from "@/types/extracted-stats";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

const emptyStats = [
  {
    type: "Ball Possession",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "expected_goals",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Total Shots",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Shots on Goal",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Shots off Goal",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Blocked Shots",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Total passes",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Passes accurate",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Passes %",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Corner Kicks",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Fouls",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Yellow Cards",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Red Cards",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Goalkeeper Saves",
    homeValue: "0",
    awayValue: "0",
  },
  {
    type: "Offsides",
    homeValue: "0",
    awayValue: "0",
  },
];

export const extractStats = (
  fixtureDetails: FixtureDetails
): ExtractedStats[] => {
  if (!fixtureDetails.statistics || fixtureDetails.statistics.length !== 2) {
    return emptyStats;
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
