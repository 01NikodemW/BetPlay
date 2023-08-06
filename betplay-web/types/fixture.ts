export type Fixture = {
  fixtureId: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  long: string;
  short: string;
  elapsed: number | null;
  homeName: string;
  awayName: string;
  homeLogo: string;
  awayLogo: string;
  goalsHomeTeam: number | null;
  goalsAwayTeam: number | null;
  venue: {
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  } | null;
  fixtureLeague: {
    league: {
      leagueId: number;
      name: string;
      type: string;
      logo: string;
      country: {
        name: string;
        code: string | null;
        flag: string | null;
      };
    };
    round: string;
    season: number;
  };
};
