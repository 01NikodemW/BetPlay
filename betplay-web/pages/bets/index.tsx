import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import BetsSection from "@/components/bets/bets-section";
import { BetsSectionContainer } from "./styles";
import Head from "next/head";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("Bets")} | BetPlay`}</title>
        <meta content="BetPlay Bets Page" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <BetsSectionContainer>
        <BetsSection />
      </BetsSectionContainer>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
