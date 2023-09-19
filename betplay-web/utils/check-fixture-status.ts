import { Fixture } from "@/types/fixture";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

export const checkIfFixtureIsLive = (fixture: Fixture) => {
  const status = fixture.short;
  const liveStatusValues = ["1H", "HT", "2H", "ET", "P", "BT"];

  return liveStatusValues.includes(status);
};

export const checkIfFixtureIsFinished = (fixture: FixtureDetails) => {
  const status = fixture.fixture.status.short;
  const finishedStatusValues = ["FT", "AET", "PEN"];

  return finishedStatusValues.includes(status);
};

export const checkIfBeforeFixtureStart = (fixture: FixtureDetails) => {
  const status = fixture.fixture.status.short;
  const staterdStatusValues = ["TBD", "NS"];

  return staterdStatusValues.includes(status);
};
