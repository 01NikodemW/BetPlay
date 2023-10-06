import { Grid } from "@mui/material";
import InfoBox from "./info-box";
import { ContainerBox } from "./styles";
import { getAllBettingSlips } from "@/api/bets/api";
import { queryKeys } from "@/api/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { BettingSlipWithoutBets } from "@/types/bets/betting-slip";

const generateNumberOfBettingSlips = (
  bettingSlips: BettingSlipWithoutBets[]
) => {
  return bettingSlips.length;
};

const generateNumberOfWonBettingSlips = (
  bettingSlips: BettingSlipWithoutBets[]
) => {
  return bettingSlips.filter((bettingSlip) => bettingSlip.status === 1).length;
};

const generateNumberOfPendingBettingSlips = (
  bettingSlips: BettingSlipWithoutBets[]
) => {
  return bettingSlips.filter((bettingSlip) => bettingSlip.status === 0).length;
};

const generateNumberOfLostBettingSlips = (
  bettingSlips: BettingSlipWithoutBets[]
) => {
  return bettingSlips.filter((bettingSlip) => bettingSlip.status === 2).length;
};

const generateNumberOfWonMoney = (
  bettingSlips: BettingSlipWithoutBets[]
): number => {
  return bettingSlips
    .filter((bs) => bs.status === 1)
    .reduce(
      (totalWonMoney, bs) => totalWonMoney + bs.totalStake * bs.totalOdds,
      0
    );
};

const generateNumberOfLostMoney = (
  bettingSlips: BettingSlipWithoutBets[]
): number => {
  return bettingSlips
    .filter((bs) => bs.status === 2)
    .reduce(
      (totalLostMoney, bs) => totalLostMoney + bs.totalStake * bs.totalOdds,
      0
    );
};

const generateBiggestWin = (bettingSlips: BettingSlipWithoutBets[]) => {
  return bettingSlips.reduce((biggestWin, bs) => {
    if (bs.status === 1 && bs.totalStake * bs.totalOdds > biggestWin) {
      return bs.totalStake * bs.totalOdds;
    }
    return biggestWin;
  }, 0);
};

const generateBiggestLoss = (bettingSlips: BettingSlipWithoutBets[]) => {
  return bettingSlips.reduce((biggestLoss, bs) => {
    if (bs.status === 2 && bs.totalStake * bs.totalOdds > biggestLoss) {
      return bs.totalStake * bs.totalOdds;
    }
    return biggestLoss;
  }, 0);
};

const BoxSection = () => {
  const { data: bettingSlips, isFetching: isBettingSlipsFetching } = useQuery({
    queryKey: [queryKeys.getAllBettingSlips],
    queryFn: () => getAllBettingSlips(),
  });

  const generateData = (bettingSlips: BettingSlipWithoutBets[]) => {
    const data = [
      {
        title: "Number of betting slips",
        value: generateNumberOfBettingSlips(bettingSlips),
      },
      {
        title: "Number of won slips",
        value: generateNumberOfWonBettingSlips(bettingSlips),
      },
      {
        title: "Number of pending slips",
        value: generateNumberOfPendingBettingSlips(bettingSlips),
      },
      {
        title: "Number of lost slips",
        value: generateNumberOfLostBettingSlips(bettingSlips),
      },
      {
        title: "Number of won money",
        value: generateNumberOfWonMoney(bettingSlips) + " zł",
      },
      {
        title: "Number of lost money",
        value: generateNumberOfLostMoney(bettingSlips) + " zł",
      },
      { title: "Biggest win", value: generateBiggestWin(bettingSlips) + "zł" },
      {
        title: "Biggest loss",
        value: generateBiggestLoss(bettingSlips) + " zł",
      },
    ];
    return data;
  };

  return (
    <ContainerBox>
      <Grid container spacing={2}>
        {!isBettingSlipsFetching &&
          bettingSlips &&
          generateData(bettingSlips.bettingSlips).map((bettingSlip, index) => {
            return (
              <Grid key={index} item sm={6} xs={12}>
                <InfoBox
                  title={bettingSlip.title}
                  value={bettingSlip.value.toString()}
                />
              </Grid>
            );
          })}
      </Grid>
    </ContainerBox>
  );
};

export default BoxSection;
