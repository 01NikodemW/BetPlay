import { CenterSectionContainer } from "./styles";
import React, { FC } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { getLiveFixturesByLeagueIds } from "@/api/fixtures/api";
import LoadingInfo from "@/components/read-to-use/loading-info";
import LiveFixture from "@/components/read-to-use/live-fixture";
import { Fixture } from "@/types/fixture";
import NoFixturesFound from "@/components/read-to-use/no-fixtures-info";

interface CenterSectionProps {
  selectedLeagueIds: number[];
}

const CenterSection: FC<CenterSectionProps> = ({ selectedLeagueIds }) => {
  const { data: fixtures, isFetching: isLiveFixturesFetching } = useQuery({
    queryKey: [queryKeys.getFixturesByDate, selectedLeagueIds],
    queryFn: () =>
      getLiveFixturesByLeagueIds({
        leagueIds: selectedLeagueIds,
      }),
  });

  return (
    <CenterSectionContainer>
      {isLiveFixturesFetching && <LoadingInfo />}
      {!isLiveFixturesFetching &&
        fixtures.fixtures.length > 0 &&
        fixtures.fixtures.map((fixture: Fixture) => (
          <LiveFixture key={fixture.fixtureId} fixture={fixture} />
        ))}
      {!isLiveFixturesFetching && fixtures.fixtures.length === 0 && (
        <NoFixturesFound />
      )}
    </CenterSectionContainer>
  );
};

export default CenterSection;
