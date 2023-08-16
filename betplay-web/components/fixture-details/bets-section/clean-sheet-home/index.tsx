import { FC } from "react";
import { BetContainer, BetHeader } from "../styles";
import { useTranslation } from "react-i18next";
import { BetOptionsBox } from "./styles";
import BetWithName from "@/components/read-to-use/bet-with-name";
import { BetsResponse } from "@/types/bets/bets-response";
import { extractParticularBet } from "@/utils/extract-particular-bet";
import { UserBet } from "@/types/user-bet";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

interface CleanSheetHomeProps {
  bets: BetsResponse;
  selectedBets: UserBet[];
  setSelectedBets: (bets: UserBet[]) => void;
  fixture: FixtureDetails;
}

const CleanSheetHome: FC<CleanSheetHomeProps> = ({
  bets,
  fixture,
  selectedBets,
  setSelectedBets,
}) => {
  const { t } = useTranslation();

  const bet = extractParticularBet(bets, "Clean Sheet - Home");
  return (
    <BetContainer>
      <BetHeader variant="h5">
        {t("Clean sheet") + ": " + fixture.teams.home.name}
      </BetHeader>
      <BetOptionsBox>
        {bet?.values.map((value, index) => (
          <BetWithName
            key={index}
            fixture={fixture}
            selectedBets={selectedBets}
            setSelectedBets={setSelectedBets}
            userBet={{
              fixtureId: fixture.fixture.id,
              betType: bet.name,
              value: value.value,
              odd: value.odd,
            }}
          />
        ))}
      </BetOptionsBox>
    </BetContainer>
  );
};

export default CleanSheetHome;
