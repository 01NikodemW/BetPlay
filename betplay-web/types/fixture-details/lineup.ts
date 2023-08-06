export type Lineup = {
  team: TeamApiDto;
  coach: CoachApiDto;
  formation: string;
  startXI: PlayerWrapper[];
  substitutes: PlayerWrapper[];
};

export type TeamApiDto = {
  id: number;
  name: string;
  logo: string;
  colors: TeamColors;
};

export type TeamColors = {
  player: Color;
  goalkeeper: Color;
};

export type Color = {
  primary: string;
  number: string;
  border: string;
};

export type CoachApiDto = {
  id: number;
  name: string;
  photo: string;
};

export type PlayerWrapper = {
  player: PlayerApiDto;
};

export type PlayerApiDto = {
  id: number | null;
  name: string;
  number: number;
  pos: string | null;
  grid: string | null;
};
