export type BetsResponse = {
  league: League;
  fixture: Fixture;
  update: string;
  bookmakers: Bookmaker[];
};

type League = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
};

type Fixture = {
  id: number;
  timezone: string;
  date: string;
  timestamp: number;
};

type Bookmaker = {
  id: number;
  name: string;
  bets: Bet[];
};

export type Bet = {
  id: number;
  name: string;
  values: BetValue[];
};

type BetValue = {
  value: string | number;
  odd: string;
};
