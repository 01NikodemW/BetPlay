import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { HomeSectionContainer } from "./styles";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import LeagueSection from "@/components/home/league-section";
import CenterSection from "@/components/home/center-section";
import BetCard from "@/components/read-to-use/bet-card";
import { useState } from "react";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  const [selectedLeagueIds, setSelectedLeagueIds] = useState<number[]>([]);

  return (
    <>
      <NextSeo title={`${t("Home")} | BetPlay`} />
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
