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
import { getLiveFixtures } from "@/api/fixtures/api";
import LoadingInfo from "@/components/read-to-use/loading-info";
import LiveFixture from "@/components/read-to-use/live-fixture";
import { Fixture } from "@/types/fixture";

const CenterSection = () => {
  const [date, setDate] = useState<string>(
    dayjs().subtract(0, "day").toISOString()
  );

  const { t } = useTranslation();

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

  const { data: fixtures, isFetching: isLiveFixturesFetching } = useQuery({
    queryKey: [queryKeys.getFixturesByDate, date],
    queryFn: () => getLiveFixtures(),
  });

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
      {isLiveFixturesFetching && <LoadingInfo />}
      {!isLiveFixturesFetching &&
        fixtures.fixtures.map((fixture: Fixture) => (
          <LiveFixture key={fixture.fixtureId} fixture={fixture} />
        ))}
    </CenterSectionContainer>
  );
};

export default CenterSection;
