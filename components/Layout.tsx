import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Luis Pedraza" }: Props) => (
  <div className="p-6 pb-12 md:p-24 md:pt-36 flex justify-center">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>{children}</div>
  </div>
);

export default Layout;
