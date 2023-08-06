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

interface FixtureProps {
  fixture: Fixture;
}

const Fixture: FC<FixtureProps> = ({ fixture }) => {
  const { t } = useTranslation();

  return (
    <FixtureCard>
      <TopSection>
        <Typography variant="body2">
          {fixture.fixtureLeague.league.name}, {fixture.fixtureLeague.round}
        </Typography>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamLogo isMarginRight={true} src={fixture.homeLogo} />
            <TeamNameTypography variant="h5">
              {fixture.homeName}
            </TeamNameTypography>
          </TeamContainer>
          <TimeTypography variant="body2">
            {getHoursAndMinutes(fixture.date)}
          </TimeTypography>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {fixture.awayName}
            </TeamNameTypography>
            <TeamLogo isMarginRight={false} src={fixture.awayLogo} />
          </TeamContainer>
        </TeamsSection>

        {leagueWithDetailsIds.includes(
          fixture.fixtureLeague.league.leagueId
        ) && <StyledOutlinedButton>{t("View details")}</StyledOutlinedButton>}
      </BottomSection>
    </FixtureCard>
  );
};

export default Fixture;
