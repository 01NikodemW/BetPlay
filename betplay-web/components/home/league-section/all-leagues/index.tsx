import {
  FlagBoxWrapper,
  LeagueFlagBox,
  LeagueNameButton,
  LeagueWrapper,
  NationFlagBox,
  PopularLeaguesCard,
  AllLeaguesHeader,
} from "./styles";
import { useTranslation } from "react-i18next";

const AllLeagues = () => {
  const { t } = useTranslation();

  const leagues = [
    {
      name: "La Liga",
      type: "League",
      logo: "https://media-1.api-sports.io/football/leagues/140.png",
      country: {
        name: "Spain",
        code: "ES",
        flag: "https://media-2.api-sports.io/flags/es.svg",
      },
    },
    {
      name: "Premier League",
      type: "League",
      logo: "https://media-1.api-sports.io/football/leagues/39.png",
      country: {
        name: "England",
        code: "GB",
        flag: "https://media-2.api-sports.io/flags/gb.svg",
      },
    },
    {
      name: "Serie A",
      type: "League",
      logo: "https://media-1.api-sports.io/football/leagues/135.png",
      country: {
        name: "Italy",
        code: "IT",
        flag: "https://media-2.api-sports.io/flags/it.svg",
      },
    },
    {
      name: "Bundesliga",
      type: "League",
      logo: "https://media-1.api-sports.io/football/leagues/78.png",
      country: {
        name: "Germany",
        code: "DE",
        flag: "https://media-2.api-sports.io/flags/de.svg",
      },
    },
    {
      name: "Ligue 1",
      type: "League",
      logo: "https://media-1.api-sports.io/football/leagues/61.png",
      country: {
        name: "France",
        code: "FR",
        flag: "https://media-2.api-sports.io/flags/fr.svg",
      },
    },
  ];

  return (
    <PopularLeaguesCard>
      <AllLeaguesHeader variant="h6">
        {t("All")}
      </AllLeaguesHeader>
      {leagues.map((league, index) => (
        <LeagueWrapper key={index}>
          <FlagBoxWrapper>
            <NationFlagBox src={league.country.flag} />
            <LeagueFlagBox src={league.logo} />
          </FlagBoxWrapper>
          <LeagueNameButton>{league.name}</LeagueNameButton>
        </LeagueWrapper>
      ))}
    </PopularLeaguesCard>
  );
};

export default AllLeagues;
