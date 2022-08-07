import "react-toastify/dist/ReactToastify.css";

import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../services/queryClient";
import { ToastContainer } from "react-toastify";
import { CloseButton } from "../components/CustomTostfy/CloseButton";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
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
