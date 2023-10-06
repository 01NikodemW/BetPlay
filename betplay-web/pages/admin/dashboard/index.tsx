/*
 * Smartbike.WebApp.Front
 *
 * (c) 2022 Ejsak Gorup
 */
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "@/pages/_app";
import { DashboardContainer } from "./styles";
import AdminDashboardLayout from "@/components/dashboard-layout/admin-layout";
import BoxSection from "@/components/admin/dashboard/box-section";
import ChartSection from "@/components/admin/dashboard/chart-section";

const Dashboard: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("Dashboard")} | BetPlay`}</title>
        <meta content="BetPlay Dashboard Page" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DashboardContainer>
        <ChartSection />
        <BoxSection />
      </DashboardContainer>
    </>
  );
};

Dashboard.getLayout = (page) => (
  <AdminDashboardLayout>{page}</AdminDashboardLayout>
);

export default Dashboard;
