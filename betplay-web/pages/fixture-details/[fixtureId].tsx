import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import { exampleFixtureDetails } from "../api/temporary-api-responses";
import FixtureHeaderSection from "@/components/fixture-details/fixture-header-section";
import FixtureEventsTree from "@/components/fixture-details/fixture-events-tree";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { fixtureId } = router.query;
  console.log("exampleFixtureDetails", fixtureId);

  return (
    <>
      <NextSeo title={`${t("Home")} | BetPlay`} />
      <FixtureHeaderSection fixture={exampleFixtureDetails} />
      <FixtureEventsTree fixture={exampleFixtureDetails} />
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
