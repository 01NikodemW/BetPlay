import { useTranslation } from "react-i18next";
import { HomeSectionContainer } from "./styles";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import LeagueSection from "@/components/home/league-section";
import CenterSection from "@/components/home/center-section";
import BetCard from "@/components/read-to-use/bet-card";
import { useState } from "react";
import Head from "next/head";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  const [selectedLeagueIds, setSelectedLeagueIds] = useState<number[]>([]);

  return (
    <>
      <Head>
        <title>{`${t("Home")} | BetPlay`}</title>
        <meta content="BetPlay Home Page" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <HomeSectionContainer>
        <LeagueSection
          selectedLeagueIds={selectedLeagueIds}
          setSelectedLeagueIds={setSelectedLeagueIds}
        />
        <CenterSection selectedLeagueIds={selectedLeagueIds} />
        <BetCard mainPage={true} />
      </HomeSectionContainer>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
