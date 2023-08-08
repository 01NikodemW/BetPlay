import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import { exampleFixtureWithPenalties } from "../api/temporary-api-responses";
import FixtureHeaderSection from "@/components/fixture-details/fixture-header-section";
import FixtureEventsTree from "@/components/fixture-details/fixture-events-tree";
import FixtureLineupSection from "@/components/fixture-details/fixture-lineup-section";

const Index: NextPageWithLayout = () => {
  const router = useRouter();
  const { fixtureId } = router.query;

  return (
    <>
      <NextSeo title={`${fixtureId}  | BetPlay`} />
      <FixtureHeaderSection fixture={exampleFixtureWithPenalties} />
      <FixtureEventsTree fixture={exampleFixtureWithPenalties} />
      <FixtureLineupSection fixture={exampleFixtureWithPenalties} />
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
