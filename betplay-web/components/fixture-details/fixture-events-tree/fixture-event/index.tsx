import { FC } from "react";
import {
  CenterElement,
  FixtureEventBox,
  LeftSideBox,
  RightSideBox,
  TimeLine,
  TimeTypography,
} from "./styles";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";
import { EventType } from "@/types/fixture-details/event";
import GenerateEvent from "./generate-event";

interface FixtureEventProps {
  fixture: FixtureDetails;
  event: EventType;
  eventIndex: number;
}

const FixtureEvent: FC<FixtureEventProps> = ({
  fixture,
  event,
  eventIndex,
}) => {
  const homeTeamId = fixture.teams.home.id;
  const awayTeamId = fixture.teams.away.id;

  return (
    <FixtureEventBox>
      <LeftSideBox>
        {event.team.id === homeTeamId && (
          <GenerateEvent
            event={event}
            eventIndex={eventIndex}
            fixture={fixture}
            homeOrAway={"home"}
          />
        )}
      </LeftSideBox>
      <CenterElement>
        <TimeLine makeinvisible={eventIndex === 0 ? "true" : "false"} />
        {event.time.elapsed === 120 && event.time.extra !== null ? (
          <TimeTypography>PEN</TimeTypography>
        ) : (
          <TimeTypography>
            {event.time.elapsed}
            {event.time.extra && "+"}
            {event.time.extra && event.time.extra}
          </TimeTypography>
        )}
        <TimeLine />
      </CenterElement>
      <RightSideBox>
        {event.team.id === awayTeamId && (
          <GenerateEvent
            event={event}
            eventIndex={eventIndex}
            fixture={fixture}
            homeOrAway={"away"}
          />
        )}
      </RightSideBox>
    </FixtureEventBox>
  );
};

export default FixtureEvent;
