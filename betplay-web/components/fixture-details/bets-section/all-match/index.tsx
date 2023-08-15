import { FC } from "react";
import { BetContainer, BetHeader } from "../styles";
import { useTranslation } from "react-i18next";
import { BetOptionsBox } from "./styles";
import BetWithName from "@/components/read-to-use/bet-with-name";
import { BetsResponse } from "@/types/bets-response";
import { extractParticularBet } from "@/utils/extract-particular-bet";

interface AllMatchProps {
  bets: BetsResponse;
}

const AllMatch: FC<AllMatchProps> = ({ bets }) => {
  const { t } = useTranslation();

  const bet = extractParticularBet(bets, "Match Winner");
  console.log("bet ", bet);
  return (
    <BetContainer>
      <BetHeader variant="h5">{t("Match result")}</BetHeader>
      <BetOptionsBox>
        {bet?.values.map((value, index) => (
          <BetWithName key={index} odd={value.odd} value={value.value} />
        ))}
      </BetOptionsBox>
    </BetContainer>
  );
};

export default AllMatch;
