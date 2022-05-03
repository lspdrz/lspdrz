import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Luis Pedraza" }: Props) => (
  <div className="p-3 pb-12 2xl:p-24 2xl:pt-36 md:px-24 md:py-6">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>{children}</div>
  </div>
);

export default Layout;
