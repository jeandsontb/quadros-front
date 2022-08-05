import "react-toastify/dist/ReactToastify.css";

import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import createEmotionCache from "../cache";
import { GlobalStyle } from "../../styles/global";
import { theme } from "../../styles/theme";
import { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";
import { ToastContainer } from "react-toastify";
import { CloseButton } from "../components/CustomTostfy/CloseButton";

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          toastClassName="toastifyContainer"
          hideProgressBar
          autoClose={5000}
          closeButton={CloseButton}
        />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
