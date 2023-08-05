import {
  AllLeaguesCard,
  AllLeaguesHeader,
  CountriesContainer,
  CountryNameText,
  LeagueFlagBox,
  LeagueNameButton,
  LeagueWrapper,
  NationFlagBox,
  StyledAccordion,
  StyledAccordionSummary,
} from "./styles";
import { useTranslation } from "react-i18next";
import { countries, albaniaLeagues } from "@/pages/api/temporary-api-responses";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";

interface AllLeaguesProps {
  selectedLeagueIds: number[];
  handleLeagueClick: (leagueId: number) => () => void;
}

const AllLeagues: FC<AllLeaguesProps> = ({
  selectedLeagueIds,
  handleLeagueClick,
}) => {
  const { t } = useTranslation();

  return (
    <AllLeaguesCard>
      <AllLeaguesHeader variant="h6">{t("All")}</AllLeaguesHeader>
      <CountriesContainer>
        {countries.map((country, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <NationFlagBox src={country.flag} />
              <CountryNameText>{country.name}</CountryNameText>
            </StyledAccordionSummary>
            <AccordionDetails>
              {country.name === "Albania" &&
                albaniaLeagues.map((league) => (
                  <LeagueWrapper key={league.id}>
                    <LeagueFlagBox src={league.logo} />
                    <LeagueNameButton
                      selected={selectedLeagueIds.includes(league.id)}
                      onClick={handleLeagueClick(league.id)}
                    >
                      {league.name}
                    </LeagueNameButton>
                  </LeagueWrapper>
                ))}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </CountriesContainer>
    </AllLeaguesCard>
  );
};

export default AllLeagues;
