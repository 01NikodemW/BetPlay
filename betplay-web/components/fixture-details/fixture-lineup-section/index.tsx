import { FC, useState } from "react";
import {
  FixtureLineupSectionBox,
  HomeTeamBox,
  LineupSectionHeader,
  RightSideBox,
  SubstitutesHeader,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import TeamLineup from "./team-lineup";
import { extractTeams } from "@/utils/extract-lineups";
import { useTranslation } from "react-i18next";
import SubstitutesSection from "./substitutes-section";
import FiltersSection from "./filters-section";

interface FixtureLineupSectionProps {
  fixture: FixtureDetails;
}

const FixtureLineupSection: FC<FixtureLineupSectionProps> = ({ fixture }) => {
  const { t } = useTranslation();

  const { homeXI, homeSubstitutes, awayXI, awaySubstitutes } =
    extractTeams(fixture);

  const [currentFilter, setCurrentFilter] = useState<string>("");

  return (
    <FixtureLineupSectionBox>
      <LineupSectionHeader variant="h1">{t("Lineups")}</LineupSectionHeader>
      <HomeTeamBox>
        <TeamLineup
          currentFilter={currentFilter}
          fixture={fixture}
          homeOrAway="home"
          lineup={homeXI}
        />
        <RightSideBox>
          <FiltersSection
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <SubstitutesHeader variant="h2">{t("Bench")}</SubstitutesHeader>
          <SubstitutesSection
            currentFilter={currentFilter}
            fixture={fixture}
            homeOrAway="home"
            lineup={homeSubstitutes}
          />
        </RightSideBox>
      </HomeTeamBox>
      <HomeTeamBox>
        <TeamLineup
          currentFilter={currentFilter}
          fixture={fixture}
          homeOrAway="away"
          lineup={awayXI}
        />
        <RightSideBox>
          <FiltersSection
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <SubstitutesHeader variant="h2">{t("Bench")}</SubstitutesHeader>
          <SubstitutesSection
            currentFilter={currentFilter}
            fixture={fixture}
            homeOrAway="away"
            lineup={awaySubstitutes}
          />
        </RightSideBox>
      </HomeTeamBox>
    </FixtureLineupSectionBox>
  );
};

export default FixtureLineupSection;
