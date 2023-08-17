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
import { useRouter } from "next/router";

interface LiveFixtureProps {
  fixture: Fixture;
}

const LiveFixture: FC<LiveFixtureProps> = ({ fixture }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/fixture-details/${fixture.fixtureId}`);
  };

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
            <TeamNameTypography variant="h5">
              {fixture.homeName}
            </TeamNameTypography>
            <TeamLogo ismarginright="false" src={fixture.homeLogo} />
          </TeamContainer>

          <ScoreTypography variant="body1">
            {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
          </ScoreTypography>
          <TeamContainer>
            <TeamLogo ismarginright="true" src={fixture.awayLogo} />
            <TeamNameTypography variant="h5">
              {fixture.awayName}
            </TeamNameTypography>
          </TeamContainer>
        </TeamsSection>
        {leagueWithDetailsIds.includes(
          fixture.fixtureLeague.league.leagueId
        ) && (
          <StyledContrastOutlinedButton onClick={handleButtonClick}>
            {t("View details")}
          </StyledContrastOutlinedButton>
        )}
      </BottomSection>
    </FixtureCard>
  );
};

export default LiveFixture;
