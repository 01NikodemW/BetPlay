import { useTranslation } from "react-i18next";
import {
  FixtureCard,
  TopSection,
  BottomSection,
  TeamsSection,
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
import { useRouter } from "next/router";
import Image from "next/image";

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
          {fixture.fixtureLeague.league?.name}, {fixture.fixtureLeague.round}
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
              {t(fixture.homeName)}
            </TeamNameTypography>
            {/* <TeamLogo ismarginright="false" src={fixture.homeLogo} /> */}
            <Image
              alt="Away team logo"
              height={24}
              src={fixture.homeLogo}
              style={{
                borderRadius: "60%",
              }}
              width={24}
            />
          </TeamContainer>

          <ScoreTypography variant="body1">
            {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
          </ScoreTypography>
          <TeamContainer>
            {/* <TeamLogo ismarginright="true" src={fixture.awayLogo} /> */}
            <Image
              alt="Away team logo"
              height={24}
              src={fixture.awayLogo}
              style={{
                borderRadius: "60%",
              }}
              width={24}
            />
            <TeamNameTypography isawayteam="true" variant="h5">
              {t(fixture.awayName)}
            </TeamNameTypography>
          </TeamContainer>
        </TeamsSection>
        {/* {leagueWithDetailsIds.includes(
          fixture.fixtureLeague.league.leagueId
        ) && ( */}
        <StyledContrastOutlinedButton onClick={handleButtonClick}>
          {t("View details")}
        </StyledContrastOutlinedButton>
        {/* )} */}
      </BottomSection>
    </FixtureCard>
  );
};

export default LiveFixture;
