import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { HomeSectionContainer } from "./styles";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import LeagueSection from "@/components/home/league-section";
import BetCard from "@/components/read-to-use/bet-card";
import CenterSection from "@/components/live/center-section";

const Live: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={`${t("Live")} | BetPlay`} />
      <HomeSectionContainer>
        <LeagueSection />
        <CenterSection />
        <BetCard mainPage={true} />
      </HomeSectionContainer>
    </>
  );
};

Live.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Live;
