import { FC } from "react";
import {
  FlagBoxWrapper,
  LeagueFlagBox,
  LeagueNameButton,
  LeagueWrapper,
  NationFlagBox,
  PopularLeaguesCard,
  PopularLeaguesHeader,
} from "./styles";
import { useTranslation } from "react-i18next";
import { popularLeagues } from "@/pages/api/temporary-api-responses";

interface PopularLeaguesProps {
  selectedLeagueIds: number[];
  handleLeagueClick: (leagueId: number) => () => void;
}

const PopularLeagues: FC<PopularLeaguesProps> = ({
  selectedLeagueIds,
  handleLeagueClick,
}) => {
  const { t } = useTranslation();

  return (
    <PopularLeaguesCard>
      <PopularLeaguesHeader variant="h6">
        {t("The most popular")}
      </PopularLeaguesHeader>
      {popularLeagues.map((league, index) => (
        <LeagueWrapper key={index}>
          <FlagBoxWrapper>
            <NationFlagBox src={league.country.flag} />
            <LeagueFlagBox src={league.logo} />
          </FlagBoxWrapper>
          <LeagueNameButton
            selected={selectedLeagueIds.includes(league.id)}
            onClick={handleLeagueClick(league.id)}
          >
            {league.name}
          </LeagueNameButton>
        </LeagueWrapper>
      ))}
    </PopularLeaguesCard>
  );
};

export default PopularLeagues;
