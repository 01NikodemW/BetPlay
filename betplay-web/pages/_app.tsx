import "@/styles/globals.css";
import ThemeProvider from "@mui/system/ThemeProvider";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { createTheme } from "@/theme";

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
      <ThemeProvider theme={createTheme()}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </I18nextProvider>
  );
}
