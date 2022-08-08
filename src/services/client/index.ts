import { GetServerSidePropsContext } from "next/types";

import axios from "axios";
import { parseCookies } from "nookies";

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const { "@onlinequadros:accessToken": accessToken } = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_PORT_SERV_TEST,
  });

  if (accessToken)
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  return api;
}

export const api = setupAPI();

export const setAuthentication = (accessToken: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const removeAuthentication = () => {
  api.defaults.headers.common["Authorization"] = "";
};
