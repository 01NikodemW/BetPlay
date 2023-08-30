import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";
import BetsSection from "@/components/bets/bets-section";
import { BetsSectionContainer } from "./styles";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={`${t("Bets")} | BetPlay`} />
      <BetsSectionContainer>
        {/* <BetsSection /> */}
      </BetsSectionContainer>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
