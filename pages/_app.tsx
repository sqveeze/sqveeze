import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import '../assets/styles/styles.scss';

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}): JSX.Element => (
  <>
    <Head>
      <title>Márk Pap's official personal home page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="App Developer located in Debrecen, Hungary. Want to learn more? Hit the page." />
      <meta name="robots" content="noodp" />
      <link rel="canonical" href="https://sqveeze.hu/" />
      {/* <link rel="publisher" href="" /> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Márk Pap's official personal home page" />
      <meta property="og:description" content="App Developer located in Debrecen, Hungary. Want to learn more? Hit the page." />
      <meta property="og:url" content="https://sqveeze.hu/" />
      <meta property="og:site_name" content="Márk Pap's official personal home page" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content="App Developer located in Debrecen, Hungary. Want to learn more? Hit the page." />
      <meta name="twitter:title" content="Márk Pap's official personal home page" />
      <meta name="twitter:site" content="@sqveeze" />
      {/* <meta name="twitter:image" content=""> */}
      <meta name="twitter:creator" content="@sqveeze" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
