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
      <LeftSideBox />
      <CenterElement>
        <TimeLine makeinvisible={eventIndex === 0 ? "true" : "false"} />
        <TimeTypography>
          {event.time.elapsed}
          {event.time.extra && event.time.extra}
        </TimeTypography>
        <TimeLine />
      </CenterElement>
      <RightSideBox />
    </FixtureEventBox>
  );
};

export default FixtureEvent;
