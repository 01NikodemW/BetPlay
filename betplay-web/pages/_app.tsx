import "@/styles/globals.css";
import ThemeProvider from "@mui/system/ThemeProvider";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { createTheme } from "@/theme";
import { QueryClientProvider } from "@tanstack/react-query";

import { UserBetsProvider } from "@/context/user-bets-context";
import { Auth0Provider } from "@auth0/auth0-react";
import { queryClient } from "@/api/queryClient";
import { Toaster } from "react-hot-toast";
import { SettingsConsumer, SettingsProvider } from "@/context/settings-context";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <UserBetsProvider>
          <Auth0Provider
            authorizationParams={{
              redirect_uri: "https://bet-play.vercel.app/home",
              audience: "https://betplay-api.com",
            }}
            clientId="mfEZx3cM04vvGSRolHLFMYplGGb1LkkS"
            domain="dev-c4ln1ujdm122wn5m.us.auth0.com"
          >
            <SettingsProvider>
              <SettingsConsumer>
                {({ themeMode }) => (
                  <ThemeProvider
                    theme={createTheme({
                      mode: themeMode,
                      locale: "en",
                    })}
                  >
                    <Toaster
                      position="bottom-center"
                      toastOptions={{
                        className: "toaster",
                        style: {
                          fontFamily: "Roboto , sans-serif",
                          padding: 0,
                        },
                      }}
                    />
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeProvider>
                )}
              </SettingsConsumer>
            </SettingsProvider>
          </Auth0Provider>
        </UserBetsProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
