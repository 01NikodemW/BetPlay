import { BetValue } from "./bets-response";

export type RefactoredOverUnderBets = {
  id: number;
  name: string;
  overValues: BetValue[];
  underValues: BetValue[];
};
