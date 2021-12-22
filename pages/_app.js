import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
  )
}

export default MyApp;
