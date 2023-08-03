import { Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { TopSectionWrapper, YourApplicationText } from "./styles";
import { NextPageWithLayout } from "../_app";
import DashboardLayout from "@/components/dashboard-layout";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={`${t("Dashboard")} | BetPlay`} />
      <TopSectionWrapper>
        <Typography variant="h2"> {t("Live")}</Typography>
      </TopSectionWrapper>
      <YourApplicationText variant="h4">{t("Password")}</YourApplicationText>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
