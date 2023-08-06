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

import { exampleLiveFixture } from "@/pages/api/temporary-api-responses";
import { StyledContrastOutlinedButton } from "@/components/read-to-use/styles";

const LiveFixture = () => {
  const { t } = useTranslation();

  return (
    <FixtureCard>
      <TopSection>
        <DateAndRoundTypography variant="body2">
          {exampleLiveFixture.fixtureLeague.league.name},{" "}
          {exampleLiveFixture.fixtureLeague.round}
        </DateAndRoundTypography>
        <LiveDetailsBox>
          <LiveText>{t("Live")}</LiveText>
          <TimeAndShortTypography variant="body2">
            {t(exampleLiveFixture.short)}
            {", "}
            {exampleLiveFixture.elapsed}
            {"min"}
          </TimeAndShortTypography>
        </LiveDetailsBox>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamLogo isMarginRight={true} src={exampleLiveFixture.homeLogo} />
            <TeamNameTypography variant="h5">
              {exampleLiveFixture.homeName}
            </TeamNameTypography>
          </TeamContainer>

          <ScoreTypography variant="body1">
            {exampleLiveFixture.goalsHomeTeam} -{" "}
            {exampleLiveFixture.goalsAwayTeam}
          </ScoreTypography>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {exampleLiveFixture.awayName}
            </TeamNameTypography>
            <TeamLogo isMarginRight={false} src={exampleLiveFixture.awayLogo} />
          </TeamContainer>
        </TeamsSection>
        <StyledContrastOutlinedButton>
          {t("View details")}
        </StyledContrastOutlinedButton>
      </BottomSection>
    </FixtureCard>
  );
};

export default LiveFixture;
