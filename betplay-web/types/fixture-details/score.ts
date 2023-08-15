export type Score = {
  halftime: ScoreDetailApiDto;
  fulltime: ScoreDetailApiDto;
  extratime: ScoreDetailApiDto;
  penalty: ScoreDetailApiDto;
};

export type ScoreDetailApiDto = {
  home: number | null;
  away: number | null;
};
