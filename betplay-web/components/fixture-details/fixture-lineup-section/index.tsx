import { FC, useState } from "react";
import {
  AwayTeamBox,
  AwayTeamHeader,
  FixtureLineupSectionBox,
  HomeTeamBox,
  HomeTeamHeader,
  RightSideBox,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import TeamLineup from "./team-lineup";
import { extractTeams } from "@/utils/extract-lineups";
import SubstitutesSection from "./substitutes-section";
import FiltersSection from "./filters-section";

interface FixtureLineupSectionProps {
  fixture: FixtureDetails;
}

const FixtureLineupSection: FC<FixtureLineupSectionProps> = ({ fixture }) => {
  const { homeXI, homeSubstitutes, awayXI, awaySubstitutes } =
    extractTeams(fixture);

  const [homeTeamFilter, setHomeTeamFilter] = useState<string>("");
  const [awayTeamFilter, setAwayTeamFilter] = useState<string>("");

  return (
    <FixtureLineupSectionBox id="lineup-section">
      <HomeTeamHeader variant="h2">{fixture.teams.home.name}</HomeTeamHeader>
      <HomeTeamBox>
        <TeamLineup currentFilter={homeTeamFilter} lineup={homeXI} />
        <RightSideBox>
          <FiltersSection
            currentFilter={homeTeamFilter}
            setCurrentFilter={setHomeTeamFilter}
          />
          <SubstitutesSection
            currentFilter={homeTeamFilter}
            lineup={homeSubstitutes}
          />
        </RightSideBox>
      </HomeTeamBox>
      <AwayTeamHeader variant="h2">{fixture.teams.away.name}</AwayTeamHeader>
      <AwayTeamBox>
        <TeamLineup currentFilter={awayTeamFilter} lineup={awayXI} />
        <RightSideBox>
          <FiltersSection
            currentFilter={awayTeamFilter}
            setCurrentFilter={setAwayTeamFilter}
          />
          <SubstitutesSection
            currentFilter={awayTeamFilter}
            lineup={awaySubstitutes}
          />
        </RightSideBox>
      </AwayTeamBox>
    </FixtureLineupSectionBox>
  );
};

export default FixtureLineupSection;
