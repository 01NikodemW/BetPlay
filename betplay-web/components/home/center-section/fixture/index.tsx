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
} from "./styles";

import { StyledOutlinedButton } from "@/components/read-to-use/styles";
import { getHoursAndMinutes } from "@/utils/time";
import { Typography } from "@mui/material";
import { Fixture } from "@/types/fixture";
import { FC } from "react";
import { leagueWithDetailsIds } from "@/pages/api/const-values";
import { useRouter } from "next/router";

interface FixtureProps {
  fixture: Fixture;
}

const Fixture: FC<FixtureProps> = ({ fixture }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/fixture-details/${fixture.fixtureId}`);
  };

  return (
    <FixtureCard>
      <TopSection>
        <Typography variant="body2">
          {fixture.fixtureLeague.league?.name}, {fixture.fixtureLeague.round}
        </Typography>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {t(fixture.homeName)}
            </TeamNameTypography>
            <TeamLogo ismarginright="false" src={fixture.homeLogo} />
          </TeamContainer>
          <TimeTypography variant="body2">
            {getHoursAndMinutes(fixture.date)}
          </TimeTypography>
          <TeamContainer>
            <TeamLogo ismarginright="true" src={fixture.awayLogo} />
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
