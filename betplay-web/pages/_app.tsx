import "@/styles/globals.css";
import ThemeProvider from "@mui/system/ThemeProvider";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { createTheme } from "@/theme";
import { UserBetsProvider } from "@/context/user-bets-context";
import { Auth0Provider } from "@auth0/auth0-react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <I18nextProvider i18n={i18n}>
      <UserBetsProvider>
        <Auth0Provider
          authorizationParams={{
            redirect_uri: "http://localhost:3000/home",
          }}
          clientId="BVY8fyT3GrOEZEWsIAhVEfoeWasw6Zrw"
          domain="dev-c4ln1ujdm122wn5m.us.auth0.com"
        >
          <ThemeProvider theme={createTheme()}>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </Auth0Provider>
      </UserBetsProvider>
    </I18nextProvider>
  );
}
