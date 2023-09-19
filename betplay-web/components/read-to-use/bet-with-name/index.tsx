import { FC } from "react";

import { BetWithNameButton, BottomTypography, TopTypography } from "./styles";
import { UserBet } from "@/types/user-bet";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import {
  checkIfContainsBet,
  checkIfContainsBetOfParticularType,
  isMatchResult,
  onBetButtonClick,
} from "@/utils/bets";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface BetWithNameProps {
  selectedBets: UserBet[];
  setSelectedBets: (bets: UserBet[]) => void;
  userBet: UserBet;
  fixture: FixtureDetails;
  invisible?: boolean;
}

const BetWithName: FC<BetWithNameProps> = ({
  selectedBets,
  setSelectedBets,
  userBet,
  fixture,
  invisible,
}) => {
  const { t } = useTranslation();
  const generateValue = () => {
    switch (userBet.value) {
      case "Home":
        return fixture.teams.home.name as string;
      case "Away":
        return fixture.teams.away.name as string;
      default:
        return userBet.value as string;
    }
  };

  const handleClick = () => {
    onBetButtonClick(
      selectedBets,
      setSelectedBets,
      userBet,
      checkIfContainsBet,
      checkIfContainsBetOfParticularType
    );
  };

  // const isMatchResult = (str: string) => {
  //   return str.length <= 5 && str.includes(":");
  // };

  return (
    <BetWithNameButton
      isselected={checkIfContainsBet(selectedBets, userBet) ? "true" : "false"}
      sx={{
        visibility: invisible ? "hidden" : "visible",
      }}
      onClick={handleClick}
    >
      <TopTypography
        variant="body1"
        selected={checkIfContainsBet(selectedBets, userBet) ? "true" : "false"}
      >
        {isMatchResult(userBet.value as string)
          ? userBet.value
          : t(generateValue())}
      </TopTypography>
      <BottomTypography
        selected={checkIfContainsBet(selectedBets, userBet) ? "true" : "false"}
      >
        {userBet.odd}
      </BottomTypography>
    </BetWithNameButton>
  );
};

export default BetWithName;
