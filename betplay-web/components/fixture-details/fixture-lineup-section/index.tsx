import { FC } from "react";
import { FixtureLineupSectionBox } from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import TeamLineup from "./team-lineup";
import { extractTeams } from "@/utils/extract-lineups";

interface FixtureLineupSectionProps {
  fixture: FixtureDetails;
}

const FixtureLineupSection: FC<FixtureLineupSectionProps> = ({ fixture }) => {
  extractTeams(fixture);

  const { homeXI, homeSubstitutes, awayXI, awaySubstitutes } =
    extractTeams(fixture);

  return (
    <FixtureLineupSectionBox>
      <TeamLineup fixture={fixture} homeOrAway="home" lineup={awayXI} />
    </FixtureLineupSectionBox>
  );
};

export default FixtureLineupSection;
