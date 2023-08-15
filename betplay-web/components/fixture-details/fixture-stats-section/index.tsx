import { FC, useMemo } from "react";

import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { FixtureStatsSectionBox, StatsContainer } from "./styles";
import StatsHeader from "./stats-header";
import { extractStats } from "@/utils/extract-stats";
import SingleStats from "./single-stat";

interface FixtureStatsSectionProps {
  fixture: FixtureDetails;
}

const FixtureStatsSection: FC<FixtureStatsSectionProps> = ({ fixture }) => {
  const extractedStats = useMemo(() => extractStats(fixture), [fixture]);

  return (
    <FixtureStatsSectionBox id="stats-section">
      <StatsContainer>
        <StatsHeader fixture={fixture} />
        {extractedStats.map((stat, index) => (
          <SingleStats key={index} stat={stat} />
        ))}
      </StatsContainer>
    </FixtureStatsSectionBox>
  );
};

export default FixtureStatsSection;
