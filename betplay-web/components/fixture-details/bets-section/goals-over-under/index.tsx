import { FC, useMemo, useState } from "react";
import { BetContainer, BetHeader } from "../styles";
import { useTranslation } from "react-i18next";
import { BetColumnBox, BetOptionsBox, StyleButton } from "./styles";
import BetWithName from "@/components/read-to-use/bet-with-name";
import { Bet } from "@/types/bets/bets-response";
import { extractParticularBet } from "@/utils/extract-particular-bet";
import { UserBet } from "@/types/user-bet";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { refactorUnderOverBets } from "@/utils/bets";

interface GoalsOverUnderProps {
  bets: Bet[];
  selectedBets: UserBet[];
  setSelectedBets: (bets: UserBet[]) => void;
  fixture: FixtureDetails;
}

const GoalsOverUnder: FC<GoalsOverUnderProps> = ({
  bets,
  fixture,
  selectedBets,
  setSelectedBets,
}) => {
  const { t } = useTranslation();

  const refactoredBet = useMemo(
    () => refactorUnderOverBets(extractParticularBet(bets, "Goals Over/Under")),
    [bets]
  );

  const [showMoreClicked, setShowMoreClicked] = useState<boolean>(false);

  return (
    <BetContainer>
      <BetHeader variant="h5">{t("Goals over / under")}</BetHeader>
      <BetColumnBox>
        {refactoredBet.overValues.map((overValue, index) => {
          if (!showMoreClicked && index > 4) {
            return null;
          }

          return (
            <BetOptionsBox key={index}>
              <BetWithName
                fixture={fixture}
                selectedBets={selectedBets}
                setSelectedBets={setSelectedBets}
                userBet={{
                  homeTeam: fixture.teams.home.name,
                  awayTeam: fixture.teams.away.name,
                  fixtureId: fixture.fixture.id,
                  betType: refactoredBet.name,
                  value: overValue.value,
                  odd: overValue.odd,
                }}
              />
              <BetWithName
                fixture={fixture}
                selectedBets={selectedBets}
                setSelectedBets={setSelectedBets}
                userBet={{
                  homeTeam: fixture.teams.home.name,
                  awayTeam: fixture.teams.away.name,
                  fixtureId: fixture.fixture.id,
                  betType: refactoredBet.name,
                  value: refactoredBet.underValues[index].value,
                  odd: refactoredBet.underValues[index].odd,
                }}
              />
            </BetOptionsBox>
          );
        })}
        <StyleButton
          variant="outlined"
          onClick={() => setShowMoreClicked(!showMoreClicked)}
        >
          {showMoreClicked ? t("Show less") : t("Show more")}
        </StyleButton>
      </BetColumnBox>
    </BetContainer>
  );
};

export default GoalsOverUnder;
