import { FC } from "react";
import { FixtureEventsBox } from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import FixtureEvent from "./fixture-event";


interface FixtureEventsTreeProps {
  fixture: FixtureDetails;
}

const FixtureEventsTree: FC<FixtureEventsTreeProps> = ({ fixture }) => {
  return (
    <FixtureEventsBox id="event-tree-section">
      {fixture.events &&
        fixture.events.map((event, index) => {
          return (
            <FixtureEvent
              key={index}
              event={event}
              eventIndex={index}
              fixture={fixture}
            />
          );
        })}
    </FixtureEventsBox>
  );
};

export default FixtureEventsTree;
