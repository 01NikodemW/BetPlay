import React, { useMemo, useState } from "react";
import {
  BetContainer,
  BetDetailsContainer,
  FirstTextBox,
  HeaderTypography,
  SecondTextBox,
  StyledButton,
  StyledTextField,
} from "./styles";
import { useUserBets } from "@/context/user-bets-context";
import { useTranslation } from "react-i18next";
import { Button, InputAdornment, Typography } from "@mui/material";
import { UserBet } from "@/types/user-bet";
import { testIfPositiveInteger } from "@/utils/input-validators";

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

  return (
    <BetContainer expanded={isExpanded ? "true" : "false"}>
      <HeaderTypography variant="h6">
        {t("My coupon")}{" "}
        {betCount > 0 && `(${betCount} ${t(betCount > 1 ? "bets" : "bet")})`}
        {betCount === 0 && `(${t("No bets")})`}
      </HeaderTypography>
      <BetDetailsContainer expanded={isExpanded ? "true" : "false"}>
        da
      </BetDetailsContainer>
      <StyledButton variant="outlined" onClick={handleClick}>
        {t("Show my bets")}
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
