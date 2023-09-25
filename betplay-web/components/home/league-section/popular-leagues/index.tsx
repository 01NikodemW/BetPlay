import { FC } from "react";
import {
  FlagBoxWrapper,
  LeagueNameButton,
  LeagueWrapper,
  PopularLeaguesCard,
  PopularLeaguesHeader,
} from "./styles";
import { useTranslation } from "react-i18next";
import { popularLeagues } from "@/pages/api/temporary-api-responses";
import Image from "next/image";

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
      <PopularLeaguesHeader>{t("The most popular")}</PopularLeaguesHeader>
      {popularLeagues.map((league, index) => (
        <LeagueWrapper key={index}>
          <FlagBoxWrapper>
            <Image
              alt="Country flag"
              height={20}
              src={league.country.flag}
              style={{
                borderRadius: "60%",
              }}
              width={20}
            />
            <Image
              alt="League flag"
              height={20}
              src={league.logo}
              style={{
                borderRadius: "60%",
              }}
              width={20}
            />
          </FlagBoxWrapper>
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
    </PopularLeaguesCard>
  );
};

export default PopularLeagues;
