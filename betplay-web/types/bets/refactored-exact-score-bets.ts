import { BetValue } from "./bets-response";

export type RefactoredExactScoreBets = {
  id: number;
  name: string;
  home: BetValue[];
  draw: BetValue[];
  Away: BetValue[];
  [key: string]: any;
};
