import { FC, useState } from "react";
import {
  FixtureLineupSectionBox,
  HomeTeamBox,
  LineupSectionHeader,
  RightSideBox,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import TeamLineup from "./team-lineup";
import { extractTeams } from "@/utils/extract-lineups";
import { useTranslation } from "react-i18next";
import SubstitutesSection from "./substitutes-section";

interface FixtureLineupSectionProps {
  fixture: FixtureDetails;
}

const FixtureLineupSection: FC<FixtureLineupSectionProps> = ({ fixture }) => {
  const { t } = useTranslation();

  const { homeXI, homeSubstitutes, awayXI, awaySubstitutes } =
    extractTeams(fixture);

  const [currentFilter, setCurrentFilter] = useState<string>();

  return (
    <FixtureLineupSectionBox>
      <LineupSectionHeader variant="h1">{t("Lineups")}</LineupSectionHeader>
      <HomeTeamBox>
        <TeamLineup fixture={fixture} homeOrAway="home" lineup={awayXI} />
        <RightSideBox>
          <SubstitutesSection
            fixture={fixture}
            homeOrAway="home"
            lineup={homeSubstitutes}
          />
        </RightSideBox>
      </HomeTeamBox>
    </FixtureLineupSectionBox>
  );
};

export default FixtureLineupSection;
