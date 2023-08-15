import { Bet, BetsResponse } from "@/types/bets-response";

export const extractParticularBet = (
  betObject: BetsResponse,
  betName: string
): Bet | null => {
  for (let bookmaker of betObject.bookmakers) {
    for (let bet of bookmaker.bets) {
      if (bet.name === betName) {
        return bet;
      }
    }
  }
  return null;
};
