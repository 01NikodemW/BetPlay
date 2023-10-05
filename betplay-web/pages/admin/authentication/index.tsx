/*
 * Smartbike.WebApp.Front
 *
 * (c) 2022 Ejsak Gorup
 */
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { NextPageWithLayout } from "@/pages/_app";
import { VerticalBox } from "./styles";
import LoginForm from "@/components/admin/authentication/login-form";

const Login: NextPageWithLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{`${t("Authentication")} | BetPlay`}</title>
        <meta content="BetPlay Authentication Page" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <VerticalBox>
        <LoginForm />
      </VerticalBox>
    </>
  );
};

export default Login;
