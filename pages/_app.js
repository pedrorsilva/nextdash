import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/style.css";
import "../styles/style.scroll.css";

import Head from "next/head";
import React from "react";

function App({ Component, pageProps }) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </>
  );
}
export default App;
