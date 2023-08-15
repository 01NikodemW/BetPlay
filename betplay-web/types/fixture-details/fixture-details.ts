import { EventType } from "./event";
import { Fixture } from "./fixture";
import { Goals } from "./goals";
import { League } from "./league";
import { Lineup } from "./lineup";
import { PlayerType } from "./player";
import { Score } from "./score";
import { Statistics } from "./statistics";
import { Teams } from "./teams";

export type FixtureDetails = {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
  events: EventType[] | null;
  lineups: Lineup[] | null;
  statistics: Statistics[] | null;
  players: PlayerType[] | null;
};
