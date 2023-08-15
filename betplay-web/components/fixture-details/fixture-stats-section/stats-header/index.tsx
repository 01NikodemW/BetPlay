import { FC } from "react";
import {
  TeamBox,
  TeamLogo,
  TeamTypography,
  TeamsHeaderSection,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

interface StatsHeaderProps {
  fixture: FixtureDetails;
}

const StatsHeader: FC<StatsHeaderProps> = ({ fixture }) => {
  return (
    <TeamsHeaderSection>
      <TeamBox>
        <TeamLogo marginrightorleft="right" src={fixture.teams.home.logo} />
        <TeamTypography variant="h5">{fixture.teams.home.name}</TeamTypography>
      </TeamBox>

      <TeamBox>
        <TeamTypography variant="h5">{fixture.teams.away.name}</TeamTypography>
        <TeamLogo marginrightorleft="left" src={fixture.teams.away.logo} />
      </TeamBox>
    </TeamsHeaderSection>
  );
};

export default StatsHeader;
