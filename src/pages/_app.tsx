import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <div id="portal-root" />
    </>
  );
};

export default api.withTRPC(App);
