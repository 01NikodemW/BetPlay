import { FC } from "react";
import { FixtureEventsBox } from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import FixtureEvent from "./fixture-event";

interface FixtureEventsTreeProps {
  fixture: FixtureDetails;
}

const FixtureEventsTree: FC<FixtureEventsTreeProps> = ({ fixture }) => {
  return (
    <FixtureEventsBox>
      {fixture.events &&
        fixture.events.map((event, index) => {
          return (
            <FixtureEvent
              key={index}
              fixture={fixture}
              event={event}
              eventIndex={index}
            />
          );
        })}
    </FixtureEventsBox>
  );
};

export default FixtureEventsTree;
