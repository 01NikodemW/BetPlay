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
import { Country } from "@/types/country";

interface AllLeaguesProps {
  selectedLeagueIds: number[];
  handleLeagueClick: (leagueId: number) => () => void;
}

const AllLeagues: FC<AllLeaguesProps> = ({
  selectedLeagueIds,
  handleLeagueClick,
}) => {
  const { t } = useTranslation();

  const sortCountriesByLanguage = (countries: Country[]) => {
    const sortedCountries = [...countries];

    sortedCountries.sort((a, b) => {
      const nameA = t(a.name);
      const nameB = t(b.name);
      return nameA.localeCompare(nameB);
    });

    return sortedCountries;
  };

  const sortedCountries = sortCountriesByLanguage(countries);

  return (
    <AllLeaguesCard>
      <AllLeaguesHeader variant="h6">{t("All")}</AllLeaguesHeader>
      <CountriesContainer>
        {sortedCountries.map((country, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <NationFlagBox src={country.flag} />
              <CountryNameText>{t(country.name)}</CountryNameText>
            </StyledAccordionSummary>
            <AccordionDetails>
              {country.name === "Albania" &&
                albaniaLeagues.map((league) => (
                  <LeagueWrapper key={league.id}>
                    <LeagueFlagBox src={league.logo} />
                    <LeagueNameButton
                      isselected={
                        selectedLeagueIds.includes(league.id) ? "true" : "false"
                      }
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
