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
import {
  countriesForAllLeagues,
  englandLeagues,
  franceLeagues,
  germanyLeagues,
  italyLeagues,
  polandLeagues,
  spainLeagues,
  worldLeagues,
} from "@/pages/api/temporary-api-responses";
import { AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";
import { League } from "@/types/league";

type LeaguesMappingType = {
  Spain: League[];
  Italy: League[];
  France: League[];
  England: League[];
  Germany: League[];
  Poland: League[];
  World: League[];
};

const leaguesMapping: LeaguesMappingType = {
  Spain: spainLeagues,
  Italy: italyLeagues,
  France: franceLeagues,
  England: englandLeagues,
  Germany: germanyLeagues,
  Poland: polandLeagues,
  World: worldLeagues,
};
interface AllLeaguesProps {
  selectedLeagueIds: number[];
  handleLeagueClick: (leagueId: number) => () => void;
}

const AllLeagues: FC<AllLeaguesProps> = ({
  selectedLeagueIds,
  handleLeagueClick,
}) => {
  const { t } = useTranslation();

  const sortCountriesByLanguage = (
    countries: {
      name: string;
      flag: string | null;
      code: string | null;
    }[]
  ) => {
    const sortedCountries = [...countries];

    sortedCountries.sort((a, b) => {
      const nameA = t(a.name);
      const nameB = t(b.name);
      return nameA.localeCompare(nameB);
    });

    return sortedCountries;
  };

  const sortedCountries = sortCountriesByLanguage(countriesForAllLeagues);

  return (
    <AllLeaguesCard>
      <AllLeaguesHeader variant="h6">{t("All")}</AllLeaguesHeader>
      <CountriesContainer>
        {sortedCountries.map((country, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <NationFlagBox src={country.flag || ""} />
              <CountryNameText>{t(country.name)}</CountryNameText>
            </StyledAccordionSummary>
            <AccordionDetails>
              {(
                leaguesMapping[country.name as keyof LeaguesMappingType] || []
              ).map((league) => (
                <LeagueWrapper key={league.leagueId}>
                  <LeagueFlagBox src={league.logo || ""} />
                  <LeagueNameButton
                    isselected={
                      selectedLeagueIds.includes(league.leagueId)
                        ? "true"
                        : "false"
                    }
                    onClick={handleLeagueClick(league.leagueId)}
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
