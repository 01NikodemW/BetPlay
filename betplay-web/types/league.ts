export type League = {
  leagueId: number;
  name: string;
  type: string | null;
  logo: string | null;
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
};
