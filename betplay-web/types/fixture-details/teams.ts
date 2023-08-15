export type Teams = {
  home: TeamDetailApiDto;
  away: TeamDetailApiDto;
};

export type TeamDetailApiDto = {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
};
