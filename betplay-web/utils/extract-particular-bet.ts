import { Bet } from "@/types/bets/bets-response";

export const extractParticularBet = (
  bets: Bet[],
  betName: string
): Bet | null => {
  return bets.find((bet) => bet.name === betName) || null;
};
