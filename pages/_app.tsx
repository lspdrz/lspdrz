import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/tailwind.css"; // import Tailwind globally
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { DarkModeContext } from "../context/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [cookies] = useCookies(["lspdrzDarkMode"]);
  const [darkMode, setDarkMode] = useState(false);
  const appBackgroundStyle = darkMode ? "bg-lspdrz-gray text-lspdrz-pink" : "";

  useEffect(() => {
    setDarkMode(cookies.lspdrzDarkMode);
  }, [cookies.lspdrzDarkMode]);

  return (
    <DarkModeContext.Provider value={darkMode}>
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
