import { useTranslation } from "react-i18next";
import {
  FixtureCard,
  TopSection,
  BottomSection,
  TeamsSection,
  TeamLogo,
  TeamContainer,
  TeamNameTypography,
  TimeTypography,
  ScoreTypography,
} from "./styles";
import { StyledOutlinedButton } from "@/components/read-to-use/styles";
import { Typography } from "@mui/material";
import { Fixture } from "@/types/fixture";
import { FC } from "react";
import { useRouter } from "next/router";
import { checkIfFixtureIsFinished } from "@/utils/check-fixture-status";
import Image from "next/image";

interface FixtureProps {
  fixture: Fixture;
}

const Fixture: FC<FixtureProps> = ({ fixture }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/fixture-details/${fixture.fixtureId}`);
  };

  function convertToUserTimezone(dateString: string) {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Date(dateString).toLocaleString("en-US", {
      timeZone: userTimeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }

  return (
    <FixtureCard>
      <TopSection>
        <Typography variant="body2">
          {t(fixture.fixtureLeague.league?.name)},{" "}
          {t(fixture.fixtureLeague.round)}
        </Typography>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {t(fixture.homeName)}
            </TeamNameTypography>
            {/* <TeamLogo ismarginright="false" src={fixture.homeLogo} /> */}
            <Image
              alt="Home team logo"
              height={24}
              src={fixture.homeLogo}
              style={{
                borderRadius: "60%",
              }}
              width={24}
            />
          </TeamContainer>
          {!checkIfFixtureIsFinished(fixture) && (
            <TimeTypography variant="body2">
              {convertToUserTimezone(fixture.date)}
            </TimeTypography>
          )}
          {checkIfFixtureIsFinished(fixture) && (
            <ScoreTypography variant="body1">
              {fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}
            </ScoreTypography>
          )}
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
        <StyledOutlinedButton onClick={handleButtonClick}>
          {t("View details")}
        </StyledOutlinedButton>
        {/* )} */}
      </BottomSection>
    </FixtureCard>
  );
};

export default Fixture;
