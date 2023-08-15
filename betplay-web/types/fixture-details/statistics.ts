export type Statistics = {
  team: TeamApiDto;
  statistics: SingleStatisticApiDto[];
};

export type TeamApiDto = {
  id: number;
  name: string;
  logo: string;
};

export type SingleStatisticApiDto = {
  type: string;
  value: any | null;
};
