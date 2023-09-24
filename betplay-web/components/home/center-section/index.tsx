import { checkIfFixtureIsLive } from "@/utils/check-fixture-status";
import {
  ButtonBox,
  ButtonText,
  CenterSectionContainer,
  LeftButton,
  RightButton,
} from "./styles";
import React, { FC, useState } from "react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { getFixturesByDateAndLeagueIds } from "@/api/fixtures/api";
import LoadingInfo from "@/components/read-to-use/loading-info";
import LiveFixture from "@/components/read-to-use/live-fixture";
import Fixture from "@/components/read-to-use/fixture";
import NoFixturesFound from "@/components/read-to-use/no-fixtures-info";

interface CenterSectionProps {
  selectedLeagueIds: number[];
}

const CenterSection: FC<CenterSectionProps> = ({ selectedLeagueIds }) => {
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

  const { data: fixtures, isFetching: isFixturesFetching } = useQuery({
    queryKey: [queryKeys.getFixturesByDate, date, selectedLeagueIds],
    queryFn: () =>
      getFixturesByDateAndLeagueIds({
        date,
        leagueIds: selectedLeagueIds,
      }),
  });

  return (
    <CenterSectionContainer>
      <ButtonBox>
        <LeftButton
          aria-label="PreviousDate"
          onClick={() => setDate(dayjs(date).subtract(1, "day").toISOString())}
        />
        <RightButton
          aria-label="NextDate"
          onClick={() => setDate(dayjs(date).add(1, "day").toISOString())}
        />
        <ButtonText>{"<" + generateDate(date) + ">"}</ButtonText>
      </ButtonBox>
      {isFixturesFetching && <LoadingInfo />}
      {!isFixturesFetching &&
        fixtures.fixtures.length > 0 &&
        fixtures.fixtures.map((fixture: Fixture) => (
          <React.Fragment key={fixture.fixtureId}>
            {checkIfFixtureIsLive(fixture) && <LiveFixture fixture={fixture} />}
            {!checkIfFixtureIsLive(fixture) && <Fixture fixture={fixture} />}
          </React.Fragment>
        ))}
      {!isFixturesFetching && fixtures.fixtures.length === 0 && (
        <NoFixturesFound />
      )}
    </CenterSectionContainer>
  );
};

export default CenterSection;
