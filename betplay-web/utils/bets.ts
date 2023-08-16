import { Bet } from "@/types/bets/bets-response";
import { RefactoredExactScoreBets } from "@/types/bets/refactored-exact-score-bets";
import { RefactoredOverUnderBets } from "@/types/bets/refactored-over-under-bets";
import { UserBet } from "@/types/user-bet";

export const checkIfContainsBet = (userBets: UserBet[], bet: UserBet) => {
  return userBets.some(
    (userBet) =>
      userBet.fixtureId === bet.fixtureId &&
      userBet.betType === bet.betType &&
      userBet.value === bet.value &&
      userBet.odd === bet.odd
  );
};

export const checkIfContainsBetOfParticularType = (
  userBets: UserBet[],
  bet: UserBet
) => {
  return userBets.some(
    (userBet) =>
      userBet.fixtureId === bet.fixtureId && userBet.betType === bet.betType
  );
};

export const onBetButtonClick = (
  selectedBets: UserBet[],
  setSelectedBets: (bets: UserBet[]) => void,
  userBet: UserBet,
  checkIfContainsBet: (bets: UserBet[], bet: UserBet) => boolean,
  checkIfContainsBetOfParticularType: (bets: UserBet[], bet: UserBet) => boolean
) => {
  if (checkIfContainsBet(selectedBets, userBet)) {
    setSelectedBets(
      selectedBets.filter(
        (bet) =>
          bet.fixtureId !== userBet.fixtureId ||
          bet.betType !== userBet.betType ||
          bet.value !== userBet.value ||
          bet.odd !== userBet.odd
      )
    );
  } else if (checkIfContainsBetOfParticularType(selectedBets, userBet)) {
    const updatedBets = selectedBets.filter(
      (bet) =>
        bet.fixtureId !== userBet.fixtureId || bet.betType !== userBet.betType
    );

    setSelectedBets([...updatedBets, userBet]);
  } else {
    setSelectedBets([...selectedBets, userBet]);
  }
};

function extractNumber(value: string): number {
  const match = value.match(/\d+(\.\d+)?/); // Regex to extract float number
  return match ? parseFloat(match[0]) : 0;
}

export const refactorUnderOverBets = (
  obj: Bet | null
): RefactoredOverUnderBets => {
  if (!obj) throw new Error("Bet is null");
  const refactoredObj: RefactoredOverUnderBets = {
    id: obj.id,
    name: obj.name,
    overValues: [],
    underValues: [],
  };

  obj.values.forEach((value) => {
    if (typeof value.value === "string" && value.value.includes("Over")) {
      refactoredObj.overValues.push(value);
    } else if (
      typeof value.value === "string" &&
      value.value.includes("Under")
    ) {
      refactoredObj.underValues.push(value);
    }
  });

  refactoredObj.overValues.sort(
    (a, b) =>
      extractNumber(a.value as string) - extractNumber(b.value as string)
  );
  refactoredObj.underValues.sort(
    (a, b) =>
      extractNumber(a.value as string) - extractNumber(b.value as string)
  );

  return refactoredObj;
};

function determineCategory(score: string): "home" | "away" | "draw" {
  const [homeScore, awayScore] = score.split(":").map(Number);

  if (homeScore > awayScore) {
    return "home";
  } else if (awayScore > homeScore) {
    return "away";
  } else {
    return "draw";
  }
}

export const refactorExactScoreBets = (
  obj: Bet | null
): RefactoredExactScoreBets => {
  if (!obj) throw new Error("Bet is null");

  const refactoredObj: RefactoredExactScoreBets = {
    id: obj.id,
    name: obj.name,
    home: [],
    draw: [],
    Away: [],
  };

  obj.values.forEach((value) => {
    const category = determineCategory(value.value as string);
    if (category === "away") {
      refactoredObj.Away.push(value);
    } else {
      refactoredObj[category].push(value);
    }
  });

  // If needed, sort the arrays based on some criteria.
  // For example, you can sort by odds, or by the actual scores.

  return refactoredObj;
};
