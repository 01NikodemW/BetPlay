export type CreateBettingSlipRequest = {
  bets: {
    name: string;
    value: string;
    odd: number;
    fixtureId: number;
    homeTeam: string;
    awayTeam: string;
  }[];
  stake: number;
};
