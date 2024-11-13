import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/tailwind.css"; // import Tailwind globally
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { DarkModeContext } from "../context/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [cookies] = useCookies(["lspdrzDarkMode"]);
  const [appBackgroundStyle, setAppBackgroundStyle] = useState(
    cookies.lspdrzDarkMode || false
  );

  useEffect(() => {
    setAppBackgroundStyle(
      cookies.lspdrzDarkMode ? "bg-lspdrz-gray text-lspdrz-pink" : ""
    );
  }, [cookies.lspdrzDarkMode]);

  return (
    <DarkModeContext.Provider value={cookies.lspdrzDarkMode}>
      <div
        className={`min-h-screen ${appBackgroundStyle}`}
        // onKeyDown={(e) => handkleKeyDown}
      >
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
    </DarkModeContext.Provider>
  );
}
export default MyApp;
