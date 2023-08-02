import { Typography } from "@mui/material";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import { DashboardLayout } from "@/components/dashboard-layout/dashboard-layout";
import { TopSectionWrapper, YourApplicationText } from "./styles";
import { NextPageWithLayout } from "../_app";

const Index: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={`${t("Dashboard")} | BetPlay`} />
      <TopSectionWrapper>
        <Typography variant="h2"> {t("Hello, Cinema!")}</Typography>
      </TopSectionWrapper>
      <YourApplicationText variant="h4">{t("Password")}</YourApplicationText>
    </>
  );
};

Index.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Index;
