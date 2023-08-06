import { useTranslation } from "react-i18next";
import {
  FixtureCard,
  TopSection,
  BottomSection,
  TeamsSection,
  TeamLogo,
  TeamContainer,
  TeamNameTypography,
  DateAndRoundTypography,
  TimeAndShortTypography,
  LiveDetailsBox,
  LiveText,
  ScoreTypography,
} from "./styles";
import { StyledContrastOutlinedButton } from "@/components/read-to-use/styles";
import { Fixture } from "@/types/fixture";
import { FC } from "react";
import { leagueWithDetailsIds } from "@/pages/api/const-values";

interface LiveFixtureProps {
  fixture: Fixture;
}

const LiveFixture: FC<LiveFixtureProps> = ({ fixture }) => {
  const { t } = useTranslation();

  return (
    <FixtureCard>
      <TopSection>
        <DateAndRoundTypography variant="body2">
          {fixture.fixtureLeague.league.name}, {fixture.fixtureLeague.round}
        </DateAndRoundTypography>
        <LiveDetailsBox>
          <LiveText>{t("Live")}</LiveText>
          <TimeAndShortTypography variant="body2">
            {t(fixture.short)}
            {", "}
            {fixture.elapsed}
            {"min"}
          </TimeAndShortTypography>
        </LiveDetailsBox>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamLogo isMarginRight={true} src={fixture.homeLogo} />
            <TeamNameTypography variant="h5">
              {fixture.homeName}
            </TeamNameTypography>
          </TeamContainer>

          <ScoreTypography variant="body1">
            {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
          </ScoreTypography>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {fixture.awayName}
            </TeamNameTypography>
            <TeamLogo isMarginRight={false} src={fixture.awayLogo} />
          </TeamContainer>
        </TeamsSection>
        {leagueWithDetailsIds.includes(
          fixture.fixtureLeague.league.leagueId
        ) && (
          <StyledContrastOutlinedButton>
            {t("View details")}
          </StyledContrastOutlinedButton>
        )}
      </BottomSection>
    </FixtureCard>
  );
};

export default LiveFixture;
