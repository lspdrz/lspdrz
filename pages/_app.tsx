import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/tailwind.css"; // import Tailwind globally

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-lspdrz-gray text-lspdrz-pink min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
