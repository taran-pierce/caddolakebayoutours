import {
  string,
  array,
} from 'prop-types'
import Head from 'next/head'
import Navigation from '../components/Navigation'

import styles from './header.module.scss';

function Header({
  pageTitle,
  activeTab,
  canonical,
  links,
  heroImage,
}) {
  return (
    <header className={styles.header}>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Taran Pierce" />
        <meta name="description" content="Caddo Lake Bayou Tours offers a guided tour of the beautiful Caddo Lake at any time from sunrise to sunset. Whether you are looking for a guided fishing tour, observe some of nature's wildlife, catch a jaw-dropping sunrise or sunset, take in some of the historic Caddo Lake culture or just enjoy some relaxing sight-seeing you are in for quite a treat. Book a boat tour with Caddo Lake Bayou Tours and experience the wonder for yourself." />
        <meta name="keywords" content="caddo, caddo lake, caddo lake boat tours, caddo lake tours, Caddo Lake boat tours, caddo lake boat tours jefferson texas, photography tours, site seeing tours, bayou tours, caddo lake tour, tours of Caddo Lake, caddo lake photos, guided fishing trip, cypress lake, caddo lake history, jefferson texas boat tours, alligator bayou tours, lake bayou, fishing trip, fishing tour, fishing guide tours, river tours, Caddo Lake, caddo lake bayou tours, caddo lake tour guide, fishing guide, travel agency, sunrise tours, sunset tours, swamp tours, caddo lake swamp, boat tours, personal tours, backwater, wildlife tours, gator, alligator, lake guide, caddo, lake, texas lake, natural lake, Louisiana lake, boats, bird watching, sightseeing, Caddo businesses, Texas, caddo lake information, uncertain texas, swamp tour, swamp adventure, caddo indians, spanish moss, fishing, caddo lake history" />
        <title>{pageTitle}</title>
        <link rel={`canonical`} href={canonical} />
        {heroImage && (
          <link rel={`preload`} href={heroImage} as={`image`}></link>
        )}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="B2p1pPmxNrh11r3HKQ5EfPlheeORHUacKHqpcLin5g8" />
      </Head>
      <Navigation activeTab={activeTab} links={links} />
    </header>
  )
};

Header.defaultProps = {
  pageTitle: 'Caddo Lake Bayou Tours',
  canonical: '',
  activeTab: '',
};

Header.propTypes = {
  pageTitle: string,
  canonical: string,
  links: array.isRequired,
  activeTab: string,
}

export default Header;
