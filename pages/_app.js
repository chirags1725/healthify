import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Healthify</title>
      </Head>
      <SpeedInsights></SpeedInsights>
      <Component {...pageProps} />
    </>
  );
}
