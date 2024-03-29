import React, { FC, useMemo, useState } from "react";
import {
  BetBottomBox,
  BetBox,
  BetContainer,
  BetDetailsContainer,
  CloseBetContainerButton,
  FirstTextBox,
  HeaderBox,
  HeaderTypography,
  MobileBetButton,
  PossibleBetPrize,
  PossibleBetPrizeTypography,
  SecondTextBox,
  StyledButton,
  StyledTextField,
  TopTypography,
} from "./styles";
import { useUserBets } from "@/context/user-bets-context";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  InputAdornment,
  Modal,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { UserBet } from "@/types/user-bet";
import { testIfPositiveInteger } from "@/utils/input-validators";
import { isMatchResult } from "@/utils/bets";
import CloseIcon from "@mui/icons-material/Close";
import { CreateBettingSlipRequest } from "@/types/api/bets/create-betting-slip-request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createBettingSlip } from "@/api/bets/api";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/api/queryKeys";
import { getUserData } from "@/api/user/api";
import { ModalStyle, StyledOutlinedButton } from "../styles";

const calculateTotalOdds = (bets: UserBet[]) => {
  const product = bets.reduce((acc, bet) => acc * parseFloat(bet.odd), 1);
  return product.toFixed(2);
};

const calculateTotalStake = (bets: UserBet[], stake: number) => {
  return (stake * Number(calculateTotalOdds(bets))).toFixed(2);
};

interface BetCardProps {
  mainPage: boolean;
}

const BetCard: FC<BetCardProps> = ({ mainPage }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [inputError, setInputError] = useState<boolean>(false);
  const [circleIconClicked, setCircleIconClicked] = useState<boolean>(false);
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
      setInputError(Number(e.target.value) > userData.balance);
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
  const isSmallerScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("tablet")
  );

  const { data: userData, isFetching: isUserDataFetching } = useQuery({
    queryKey: [queryKeys.getUsersData],
    queryFn: () => getUserData(),
  });

  const createBettingSlipMutation = useMutation(
    (values: CreateBettingSlipRequest) => createBettingSlip(values),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getUsersData]);
        setModalOpen(true);
      },
    }
  );

  const handleCreateBettingSlip = () => {
    const bets = selectedBets.map((bet) => {
      return {
        fixtureId: bet.fixtureId,
        name: bet.betType,
        value: bet.value.toString(),
        homeTeam: bet.homeTeam,
        awayTeam: bet.awayTeam,
        odd: Number(bet.odd),
      };
    });
    const values: CreateBettingSlipRequest = {
      bets: bets,
      stake: stake,
    };

    createBettingSlipMutation.mutate(values);
  };

  if (modalOpen) {
    return (
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedBets([]);
          setStake(0);
        }}
      >
        <Box sx={ModalStyle}>
          <Typography
            sx={{
              textAlign: "center",
            }}
            variant="h5"
          >
            {t("Your betting slip has been successfully registered")}
          </Typography>
          <PossibleBetPrizeTypography>
            {t("Potential prize")}
          </PossibleBetPrizeTypography>
          <PossibleBetPrize>
            {totalStake} {"zł"}
          </PossibleBetPrize>
          <StyledOutlinedButton
            sx={{
              alignSelf: "center",
              width: "100%",
            }}
            variant="contained"
            onClick={() => {
              setModalOpen(false);
              setSelectedBets([]);
              setStake(0);
            }}
          >
            {t("Close")}
          </StyledOutlinedButton>
        </Box>
      </Modal>
    );
  }

  if (betCount === 0) {
    return null;
  }

  if (
    mainPage === false &&
    isSmallerScreen &&
    betCount > 0 &&
    !circleIconClicked
  ) {
    return (
      <MobileBetButton
        onClick={() => {
          setCircleIconClicked(true);
        }}
      >
        {betCount}
      </MobileBetButton>
    );
  }

  return (
    <BetContainer
      circleiconclicked={circleIconClicked ? "true" : "false"}
      expanded={isExpanded ? "true" : "false"}
      mainpage={mainPage ? "true" : "false"}
    >
      <HeaderBox>
        <HeaderTypography variant="h6">
          {t("My coupon")}{" "}
          {betCount > 0 && `(${betCount} ${t(betCount > 1 ? "bets" : "bet")})`}
          {betCount === 0 && `(${t("No bets")})`}
        </HeaderTypography>
        <CloseBetContainerButton
          onClick={() => {
            setCircleIconClicked(false);
          }}
        >
          <CloseIcon />
        </CloseBetContainerButton>
      </HeaderBox>

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
        error={inputError}
        helperText={
          inputError && t("Insufficient amount of money in the account")
        }
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
      <Button
        disabled={
          stake === 0 ||
          selectedBets.length === 0 ||
          inputError ||
          isUserDataFetching
        }
        variant="contained"
        onClick={handleCreateBettingSlip}
      >
        {t("Make a bet")}
      </Button>
    </BetContainer>
  );
};

export default BetCard;
