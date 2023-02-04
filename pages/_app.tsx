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
    alphaDarkBlue: [
      'rgba(13, 71, 161, 0.05)',
      'rgba(13, 71, 161, 0.15)',
      'rgba(13, 71, 161, 0.25)',
      'rgba(13, 71, 161, 0.35)',
      'rgba(13, 71, 161, 0.45)',
      'rgba(13, 71, 161, 0.55)',
      'rgba(13, 71, 161, 0.65)',
      'rgba(13, 71, 161, 0.75)',
      'rgba(13, 71, 161, 0.85)',
      'rgba(13, 71, 161, 0.95)',
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
