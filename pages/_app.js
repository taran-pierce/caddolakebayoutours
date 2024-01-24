import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

// this does not get placed at the top of the page
// looks to be appended to the module css for the components used on the page
import '../styles/base.scss';

const links = [
  {
    "name": "About",
    "href": "/about/"
  },
  {
    "name": "Directions",
    "href": "/directions/"
  },
  {
    "name": "Things to do",
    "href": "/things-to-do/"
  },
  {
    "name": "Photo Gallery",
    "href": "/photo-gallery/"
  },
  {
    "name": "Contact",
    "href": "/contact/"
  }
];
 
function MyApp({ 
  Component, 
  pageProps,
 }) {
  const {
    canonical,
    pageTitle,
    activeTab,
    heroImage,
  } = pageProps;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-107758647-2"
        strategy="afterInteractive"
        defer
      />
      <script dangerouslySetInnerHTML={{ __html:
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', 'UA-107758647-2');`
      }} />
      <Layout>
        <Header
          pageTitle={pageTitle}
          canonical={canonical}
          links={links}
          activeTab={activeTab}
          heroImage={heroImage}
        />
        <Component {...pageProps} />
        <Footer 
          links={links} 
        />
      </Layout>
    </>
  )
}

export default MyApp;
