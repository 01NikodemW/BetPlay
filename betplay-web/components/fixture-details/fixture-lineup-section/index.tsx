import { FC } from "react";
import { FixtureLineupSectionBox } from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import TeamLineup from "./team-lineup";
import TeamLineupCopy from "./team-lineup-copy";

interface FixtureLineupSectionProps {
  fixture: FixtureDetails;
}

const FixtureLineupSection: FC<FixtureLineupSectionProps> = ({ fixture }) => {
  return (
    <FixtureLineupSectionBox>
      <TeamLineup fixture={fixture} homeOrAway="home" />
      <TeamLineupCopy fixture={fixture} homeOrAway="home" />
    </FixtureLineupSectionBox>
  );
};

export default FixtureLineupSection;
