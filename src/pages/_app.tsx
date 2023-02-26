import { type AppType } from "next/app";
import { DebugProvider } from "../state/debug";

import { api } from "../utils/api";

import "../styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <DebugProvider>
        <Component {...pageProps} />
        <div id="portal-root" />
      </DebugProvider>
    </>
  );
};

export default api.withTRPC(App);
