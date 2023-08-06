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

import { exampleFixture } from "@/pages/api/temporary-api-responses";
import { StyledOutlinedButton } from "@/components/read-to-use/styles";
import { getHoursAndMinutes } from "@/utils/time";
import { Typography } from "@mui/material";

const Fixture = () => {
  const { t } = useTranslation();

  return (
    <FixtureCard>
      <TopSection>
        <Typography variant="body2">
          {exampleFixture.fixtureLeague.league.name},{" "}
          {exampleFixture.fixtureLeague.round}
        </Typography>
      </TopSection>
      <BottomSection>
        <TeamsSection>
          <TeamContainer>
            <TeamLogo isMarginRight={true} src={exampleFixture.homeLogo} />
            <TeamNameTypography variant="h5">
              {exampleFixture.homeName}
            </TeamNameTypography>
          </TeamContainer>
          <TimeTypography variant="body2">
            {getHoursAndMinutes(exampleFixture.date)}
          </TimeTypography>
          <TeamContainer>
            <TeamNameTypography variant="h5">
              {exampleFixture.awayName}
            </TeamNameTypography>
            <TeamLogo isMarginRight={false} src={exampleFixture.awayLogo} />
          </TeamContainer>
        </TeamsSection>

        <StyledOutlinedButton>{t("View details")}</StyledOutlinedButton>
      </BottomSection>
    </FixtureCard>
  );
};

export default Fixture;
