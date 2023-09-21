import { checkIfFixtureIsLive } from "@/utils/check-fixture-status";
import Fixture from "./fixture";
import LiveFixture from "./live-fixture";
import {
  ButtonBox,
  ButtonText,
  CenterSectionContainer,
  LeftButton,
  RightButton,
} from "./styles";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { getFixturesByDateAndLeagueIds } from "@/api/fixtures/api";
import LoadingInfo from "@/components/read-to-use/loading-info";
import { getUserData } from "@/api/user/api";

const CenterSection = () => {
  const [date, setDate] = useState<string>(
    dayjs().subtract(0, "day").toISOString()
  );

  const { t } = useTranslation();
  const leagueIds = [960, 39];

  const generateDate = (date: string) => {
    const formattedDate = dayjs(date).format("DD-MM-YYYY");
    if (formattedDate === dayjs().format("DD-MM-YYYY")) {
      return t("Today");
    } else if (formattedDate === dayjs().add(1, "day").format("DD-MM-YYYY")) {
      return t("Tomorrow");
    } else if (
      formattedDate === dayjs().subtract(1, "day").format("DD-MM-YYYY")
    ) {
      return t("Yesterday");
    } else {
      return formattedDate;
    }
  };

  const { data: fixtures, isFetching } = useQuery({
    queryKey: [queryKeys.getFixturesByDate, date],
    queryFn: () =>
      getFixturesByDateAndLeagueIds({
        date,
        leagueIds,
      }),
    placeholderData: {
      data: [],
    },
  });

  const { data: userData, isFetching: isUserDataFetching } = useQuery({
    queryKey: [queryKeys.getUsersData],
    queryFn: () => getUserData(),
  });

  console.log("userData", userData);

  return (
    <CenterSectionContainer>
      <ButtonBox>
        <LeftButton
          onClick={() => setDate(dayjs(date).subtract(1, "day").toISOString())}
        />
        <RightButton
          onClick={() => setDate(dayjs(date).add(1, "day").toISOString())}
        />
        <ButtonText>{"<" + generateDate(date) + ">"}</ButtonText>
      </ButtonBox>
      {/* {leagueFixtures.map((fixture) => (
        <React.Fragment key={fixture.fixtureId}>
          {checkIfFixtureIsLive(fixture) && <LiveFixture fixture={fixture} />}
          {!checkIfFixtureIsLive(fixture) && <Fixture fixture={fixture} />}
        </React.Fragment>
      ))} */}
      {isFetching && <LoadingInfo />}
      {!isFetching &&
        fixtures.fixtures.map((fixture: Fixture) => (
          <React.Fragment key={fixture.fixtureId}>
            {checkIfFixtureIsLive(fixture) && <LiveFixture fixture={fixture} />}
            {!checkIfFixtureIsLive(fixture) && <Fixture fixture={fixture} />}
          </React.Fragment>
        ))}
    </CenterSectionContainer>
  );
};

export default CenterSection;
