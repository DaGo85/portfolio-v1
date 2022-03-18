import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio of David Goergens</title>
        <link
          rel="icon"
          type="image/icon"
          sizes="16x16"
          href="../public/D.svg"
        />
        <meta
          name="description"
          content="Webdev portfolio of David Goergens"
        />
        <meta name="author" content="David Goergens" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
