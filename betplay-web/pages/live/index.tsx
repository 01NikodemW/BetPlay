import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { HomeSectionContainer } from "./styles";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import LeagueSection from "@/components/home/league-section";
import BetCard from "@/components/read-to-use/bet-card";
import CenterSection from "@/components/live/center-section";
import { useState } from "react";
import Head from "next/head";

const Live: NextPageWithLayout = () => {
  const { t } = useTranslation();

  const [selectedLeagueIds, setSelectedLeagueIds] = useState<number[]>([]);

  return (
    <>
      <Head>
        <title>{`${t("Live")} | BetPlay`}</title>
        <meta content="BetPlay Live Page" name="description" />
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

Live.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Live;
