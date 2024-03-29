import { useRouter } from "next/router";

import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";

import FixtureHeaderSection from "@/components/fixture-details/fixture-header-section";
import FixtureEventsTree from "@/components/fixture-details/fixture-events-tree";
import FixtureLineupSection from "@/components/fixture-details/fixture-lineup-section";
import FixtureStatsSection from "@/components/fixture-details/fixture-stats-section";
import { FixtureDetailsBox } from "./styles";
import Navigation from "@/components/fixture-details/navigation";
import BetsSection from "@/components/fixture-details/bets-section";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { getFixturesById } from "@/api/fixtures/api";
import { checkIfBeforeFixtureStart } from "@/utils/check-fixture-status";
import Head from "next/head";

const Index: NextPageWithLayout = () => {
  const router = useRouter();
  const { fixtureId } = router.query;

  const { data: fixture, isFetching } = useQuery({
    queryKey: [queryKeys.getFixturesById, fixtureId],
    queryFn: () => getFixturesById(Number(fixtureId)),
    enabled: Boolean(fixtureId),
  });

  if (isFetching || fixture === undefined) return <div>Loading...</div>;

  return (
    <FixtureDetailsBox>
      <Head>
        <title>{`BetPlay`}</title>
        <meta content="BetPlay Bets Page" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Navigation fixture={fixture} />
      <FixtureHeaderSection fixture={fixture} />
      <FixtureEventsTree fixture={fixture} />
      {!checkIfBeforeFixtureStart(fixture) && (
        <FixtureLineupSection fixture={fixture} />
      )}
      <FixtureStatsSection fixture={fixture} />
      <BetsSection fixture={fixture} />
    </FixtureDetailsBox>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
