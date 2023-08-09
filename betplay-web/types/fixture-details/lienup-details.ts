import { LineupPlayerApiDto } from "./lineup";
import { PlayerApiDto } from "./player";

export type LineupDetails = {
  player: LineupPlayerApiDto;
  playerDetails: PlayerApiDto | undefined;
};
