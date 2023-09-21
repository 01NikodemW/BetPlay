export type CreateBettingSlipRequest = {
  bets: {
    name: string;
    value: string;
    odd: number;
    fixtureId: number;
  }[];
  stake: number;
};
