import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, MantineThemeOverride } from '@mantine/core';
import Header from '@/src/Header';

const theme: MantineThemeOverride = {
  colorScheme: 'dark',
  black: '#212427',
  primaryColor: 'blue',
  colors: {
    blue: [
      '#E3F2FD',
      '#BBDEFB',
      '#90CAF9',
      '#64B5F6',
      '#42A5F5',
      '#2196F3',
      '#1E88E5',
      '#1976D2',
      '#1565C0',
      '#0D47A1',
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alexander Dubinski</title>
        <meta
          name="description"
          content="Alexander Dubinski\'s Personal Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
