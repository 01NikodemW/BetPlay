import { useRouter } from "next/router";

import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { fixtureId } = router.query;

  return (
    <>
      <NextSeo title={`${t("Home")} | BetPlay`} />
      <h1>{fixtureId}</h1>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
