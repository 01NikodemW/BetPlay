export type EventType = {
  time: TimeApiDto;
  team: TeamApiDto;
  player: PlayerApiDto;
  assist: AssistApiDto;
  type: string;
  detail: string;
  comments: string | null;
};

export type TimeApiDto = {
  elapsed: number;
  extra: number | null;
};

export type TeamApiDto = {
  id: number;
  name: string;
  logo: string;
};

export type PlayerApiDto = {
  id: number | null;
  name: string | null;
};

export type AssistApiDto = {
  id: number | null;
  name: string | null;
};
