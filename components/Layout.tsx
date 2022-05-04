import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
  homePage?: boolean;
};

const Layout = ({
  children,
  title = "Luis Pedraza",
  homePage = false,
}: Props) => (
  <div className="p-3 pb-12 2xl:p-24 2xl:pt-36 md:px-24 md:py-6">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="flex items-end justify-between">
      <div className={`${homePage ? "visible" : "invisible"}`}>
        <h1 className="text-5xl">Luis</h1>
        <h1 className="text-5xl">Pedraza</h1>
      </div>
      <Navbar />
    </div>
    <div>{children}</div>
  </div>
);

export default Layout;
