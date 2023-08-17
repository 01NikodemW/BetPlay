import { FC, useMemo, useState } from "react";
import { BetContainer, BetHeader } from "../styles";
import { useTranslation } from "react-i18next";
import { BetColumnBox, BetOptionsBox, StyleButton } from "./styles";
import BetWithName from "@/components/read-to-use/bet-with-name";
import { BetsResponse } from "@/types/bets/bets-response";
import { extractParticularBet } from "@/utils/extract-particular-bet";
import { UserBet } from "@/types/user-bet";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { refactorExactScoreBets } from "@/utils/bets";
import { RefactoredExactScoreBets } from "@/types/bets/refactored-exact-score-bets";

interface ExactScoreProps {
  bets: BetsResponse;
  selectedBets: UserBet[];
  setSelectedBets: (bets: UserBet[]) => void;
  fixture: FixtureDetails;
}

const ExactScore: FC<ExactScoreProps> = ({
  bets,
  fixture,
  selectedBets,
  setSelectedBets,
}) => {
  const { t } = useTranslation();

  const refactoredBet = useMemo(
    () => refactorExactScoreBets(extractParticularBet(bets, "Exact Score")),
    [bets]
  );
  const maxLength = Math.max(
    refactoredBet.home.length,
    refactoredBet.draw.length,
    refactoredBet.Away.length
  );

  const categories: (keyof RefactoredExactScoreBets)[] = [
    "home",
    "draw",
    "Away",
  ];

  const [showMoreClicked, setShowMoreClicked] = useState<boolean>(false);

  return (
    <BetContainer>
      <BetHeader variant="h5">{t("Exact score")}</BetHeader>
      <BetColumnBox>
        {Array.from({ length: maxLength }).map((_, index) => {
          if (!showMoreClicked && index > 4) {
            return null;
          }

          return (
            <BetOptionsBox key={index}>
              {categories.map((category) => {
                const betCategory = category as keyof RefactoredExactScoreBets;
                const betValue = refactoredBet[betCategory][index];
                if (!betValue)
                  return (
                    <BetWithName
                      key={category}
                      invisible
                      fixture={fixture}
                      selectedBets={selectedBets}
                      setSelectedBets={setSelectedBets}
                      userBet={{
                        homeTeam: "",
                        awayTeam: "",
                        fixtureId: 0,
                        betType: "",
                        value: "",
                        odd: "",
                      }}
                    />
                  );

                return (
                  <BetWithName
                    key={category}
                    fixture={fixture}
                    selectedBets={selectedBets}
                    setSelectedBets={setSelectedBets}
                    userBet={{
                      homeTeam: fixture.teams.home.name,
                      awayTeam: fixture.teams.away.name,
                      fixtureId: fixture.fixture.id,
                      betType: refactoredBet.name,
                      value: betValue.value,
                      odd: betValue.odd,
                    }}
                  />
                );
              })}
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

export default ExactScore;
