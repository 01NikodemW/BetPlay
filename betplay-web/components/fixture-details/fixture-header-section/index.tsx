import { FC } from "react";
import {
  AwayTeamBox,
  BottomSection,
  FixtureHeaderBox,
  HomeTeamBox,
  LeagueHeaderSection,
  LeagueLogo,
  LeagueTypography,
  LeagueWrapper,
  PenaltyTypography,
  ScoreTypography,
  TeamLogo,
  TeamTypography,
  TeamsHeaderSection,
} from "./styles";
import { useTranslation } from "react-i18next";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

interface FixtureHeaderSectionProps {
  fixture: FixtureDetails;
}

const FixtureHeaderSection: FC<FixtureHeaderSectionProps> = ({ fixture }) => {
  const { t } = useTranslation();

  return (
    <FixtureHeaderBox>
      <LeagueHeaderSection>
        <LeagueWrapper>
          <LeagueLogo src={fixture.league.logo} />
          <LeagueTypography>
            {fixture.league.name}
            {", "}
            {fixture.league.round}
          </LeagueTypography>
        </LeagueWrapper>
      </LeagueHeaderSection>
      <TeamsHeaderSection>
        <HomeTeamBox>
          <TeamTypography>{t(fixture.teams.home.name)}</TeamTypography>
          <TeamLogo marginrightorleft="left" src={fixture.teams.home.logo} />
        </HomeTeamBox>
        <ScoreTypography>
          {fixture.goals.home}:{fixture.goals.away}
        </ScoreTypography>
        <AwayTeamBox>
          <TeamLogo marginrightorleft="right" src={fixture.teams.away.logo} />
          <TeamTypography>{t(fixture.teams.away.name)}</TeamTypography>
        </AwayTeamBox>
      </TeamsHeaderSection>
      <BottomSection>
        {fixture.score.penalty.home && (
          <PenaltyTypography>
            {t("Penalties: ")}
            {fixture.score.penalty.home}
            {"-"}
            {fixture.score.penalty.away}
          </PenaltyTypography>
        )}
      </BottomSection>
    </FixtureHeaderBox>
  );
};

export default FixtureHeaderSection;
