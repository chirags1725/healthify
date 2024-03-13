import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Redcliffe Labs - Healthy india ki trusted lab</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
