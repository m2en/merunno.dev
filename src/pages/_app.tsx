import { AppProps } from 'next/app';
import Head from 'next/head';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name={'viewpoint'}
        content={'width=device-width, initial-scale=1.0'}
      />

      <title>merunno.dev</title>

      <meta name={'name'} content={'merunno.dev'} />
      <meta property={'og:title'} content={'merunno.dev'} />
      <meta property="og:locale" content="ja_JP" />
    </Head>

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default App;
