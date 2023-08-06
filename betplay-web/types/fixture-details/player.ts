export type PlayerType = {
  team: TeamApiDto;
  players: PlayerApiDto[];
};

export type TeamApiDto = {
  id: number;
  name: string;
  logo: string;
  update: string;
};

export type PlayerApiDto = {
  player: Player;
  statistics: Statistic[];
};

export type Player = {
  id: number;
  name: string;
  photo: string;
};

export type Statistic = {
  games: Games | null;
  offsides: number | null;
  shots: Shots | null;
  goals: Goals | null;
  passes: Passes | null;
  tackles: Tackles | null;
  duels: Duels | null;
  dribbles: Dribbles | null;
  fouls: Fouls | null;
  cards: Cards | null;
  penalty: Penalty | null;
};

export type Games = {
  minutes: number | null;
  number: number | null;
  position: string | null;
  rating: string | null;
  captain: boolean | null;
  substitute: boolean | null;
};

export type Shots = {
  total: number | null;
  on: number | null;
};

export type Goals = {
  total: number | null;
  conceded: number | null;
  assists: number | null;
  saves: number | null;
};

export type Passes = {
  total: number | null;
  key: number | null;
  accuracy: string | null;
};
export type Tackles = {
  total: number | null;
  blocks: number | null;
  interceptions: number | null;
};

export type Duels = {
  total: number | null;
  won: number | null;
};

export type Dribbles = {
  attempts: number | null;
  success: number | null;
  past: number | null;
};

export type Fouls = {
  drawn: number | null;
  committed: number | null;
};

export type Cards = {
  yellow: number | null;
  red: number | null;
};

export type Penalty = {
  won: number | null;
  committed: number | null;
  scored: number | null;
  missed: number | null;
  saved: number | null;
};
