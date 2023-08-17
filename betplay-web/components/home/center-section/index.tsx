import { checkIfFixtureIsLive } from "@/utils/check-fixture-status";
import Fixture from "./fixture";
import LiveFixture from "./live-fixture";
import { CenterSectionContainer } from "./styles";
import { leagueFixtures } from "@/pages/api/temporary-api-responses";
import React from "react";

const CenterSection = () => {
  return (
    <CenterSectionContainer>
      {/* {leagueFixtures.map((fixture) => (
        <React.Fragment key={fixture.fixtureId}>
          {checkIfFixtureIsLive(fixture) && <LiveFixture fixture={fixture} />}
          {!checkIfFixtureIsLive(fixture) && <Fixture fixture={fixture} />}
        </React.Fragment>
      ))} */}
    </CenterSectionContainer>
  );
};

export default CenterSection;
