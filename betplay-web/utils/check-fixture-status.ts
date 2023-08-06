import { Fixture } from "@/types/fixture";

export const checkIfFixtureIsLive = (fixture: Fixture) => {
  const status = fixture.short;
  const liveStatusValues = ["1H", "HT", "2H", "ET", "P", "BT"];

  return liveStatusValues.includes(status);
};
