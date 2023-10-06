import { BettingSlipBet } from "./betting-slip-bet";

export type BettingSlip = {
  id: string;
  totalStake: number;
  totalOdds: number;
  status: string;
  bets: BettingSlipBet[];
  date: string;
};

export type BettingSlipWithoutBets = {
  id: string;
  totalStake: number;
  totalOdds: number;
  status: number;
  date: string;
};
