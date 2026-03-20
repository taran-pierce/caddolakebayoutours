import Script from 'next/script';
import Head from 'next/head';
import Page from '../components/Page';
import { MenuStateProvider } from '../utils/menuState';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../app/globals.css';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <MenuStateProvider>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>

      {/* Load GA library AFTER the page is interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W5JZ0PXX0N"
        strategy="afterInteractive"
      />

      {/* GA initialization AFTER interactive */}
      <Script id="ga-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W5JZ0PXX0N');
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
