import Script from 'next/script';
import Head from 'next/head';
import Page from '../src/components/Page';
import { MenuStateProvider } from '../src/utils/menuState';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import '../src/app/globals.css';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>

      {/* Load GA library AFTER the page is interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-107758647-2"
        strategy="afterInteractive"
      />

      {/* GA initialization AFTER interactive */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-107758647-2', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Page>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Page>
    </MenuStateProvider>
  );
}
