import React, { useMemo, useState } from "react";
import {
  BetBottomBox,
  BetBox,
  BetContainer,
  BetDetailsContainer,
  FirstTextBox,
  HeaderTypography,
  SecondTextBox,
  StyledButton,
  StyledTextField,
  TopTypography,
} from "./styles";
import { useUserBets } from "@/context/user-bets-context";
import { useTranslation } from "react-i18next";
import { Button, InputAdornment, Typography } from "@mui/material";
import { UserBet } from "@/types/user-bet";
import { testIfPositiveInteger } from "@/utils/input-validators";
import { isMatchResult } from "@/utils/bets";

// Moved outside of the component
const calculateTotalOdds = (bets: UserBet[]) => {
  const product = bets.reduce((acc, bet) => acc * parseFloat(bet.odd), 1);
  return (product * 0.88).toFixed(2);
};

const calculateTotalStake = (bets: UserBet[], stake: number) => {
  return (stake * Number(calculateTotalOdds(bets))).toFixed(2);
};

const BetCard = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { stake, setStake, selectedBets, setSelectedBets } = useUserBets();
  const betCount = selectedBets.length;
  const totalOdds = useMemo(
    () => calculateTotalOdds(selectedBets),
    [selectedBets]
  );
  const totalStake = useMemo(
    () => calculateTotalStake(selectedBets, stake),
    [selectedBets, stake]
  );

  const handleClick = () => {
    if (selectedBets.length !== 0) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleStakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (testIfPositiveInteger(e.target.value)) {
      setStake(Number(e.target.value));
    }
  };

  const generateValue = (bet: UserBet) => {
    switch (bet.value) {
      case "Home":
        return bet.homeTeam as string;
      case "Away":
        return bet.awayTeam as string;
      default:
        return bet.value as string;
    }
  };

  if (betCount === 0) {
    return null;
  }

  return (
    <BetContainer expanded={isExpanded ? "true" : "false"}>
      <HeaderTypography variant="h6">
        {t("My coupon")}{" "}
        {betCount > 0 && `(${betCount} ${t(betCount > 1 ? "bets" : "bet")})`}
        {betCount === 0 && `(${t("No bets")})`}
      </HeaderTypography>
      <BetDetailsContainer expanded={isExpanded ? "true" : "false"}>
        {selectedBets.map((bet, index) => (
          <BetBox key={index} last={index === betCount - 1 ? "true" : "false"}>
            <TopTypography variant="h6">
              {bet.homeTeam + " - " + bet.awayTeam}
            </TopTypography>
            <BetBottomBox>
              <Typography variant="subtitle2">{t(bet.betType)}</Typography>
              <Typography variant="subtitle2">
                {isMatchResult(bet.value as string)
                  ? bet.value
                  : t(generateValue(bet))}
              </Typography>
            </BetBottomBox>
          </BetBox>
        ))}
      </BetDetailsContainer>
      <StyledButton variant="outlined" onClick={handleClick}>
        {isExpanded ? t("Show less") : t("Show my bets")}
      </StyledButton>

      <StyledTextField
        InputProps={{
          endAdornment: <InputAdornment position="end">zł</InputAdornment>,
        }}
        label={t("Stake")}
        value={stake !== 0 ? stake : ""}
        onChange={handleStakeChange}
      />
      <FirstTextBox>
        <Typography variant="subtitle2">{t("Total odds")}</Typography>
        <Typography variant="subtitle2">{totalOdds}</Typography>
      </FirstTextBox>
      <SecondTextBox>
        <Typography variant="subtitle1">{t("Potential prize")}</Typography>
        <Typography variant="subtitle1">{totalStake}</Typography>
      </SecondTextBox>
      <Button variant="contained">{t("Make a bet")}</Button>
    </BetContainer>
  );
};

export default BetCard;
