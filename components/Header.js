import Head from 'next/head'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Head>
          <title>{this.props.pageTitle}</title>
          <meta name="viewport" content="width=device-width" />
          <meta name="robots" content="noindex, nofollow" />
          <link rel="canonical" href={`https://www.caddolakebayoutours.com${this.props.canonical}`} />
          <link rel="shortcut icon" href="/public/images/favicon.ico" type="image/x-icon"></link>
          <link href="/public/css/base.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap" rel="stylesheet"></link>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <meta name="author" content="Taran Pierce" />
          <meta name="description" content="Caddo Lake Bayou Tours offers a guided tour of the beautiful Caddo Lake at any time from sunrise to sunset. Whether you are looking for a guided fishing
  tour, observe some of nature's wildlife, catch a jaw-dropping sunrise or sunset, take in some of the historic Caddo Lake culture or just enjoy some relaxing sight-seeing you are in for quite
   a treat. Book a boat tour with Caddo Lake Bayou Tours and experience the wonder for yourself." />
          <meta name="keywords" content="Caddo Lake boat tours, bayou tours, caddo lake tour, tours of Caddo Lake, caddo lake photos, guided fishing trip, cypress lake, caddo lake history, jefferson
  texas boat tours, alligator bayou tours, lake bayou, fishing trip, fishing tour, fishing guide tours, river tours, Caddo Lake, caddo lake bayou tours, caddo lake tour guide, fishing guide, travel agency, sunrise tours, sunset tours, swamp tours, caddo lake swamp, boat tours, personal tours, backwater, wildlife tours, gator, alligator, lake guide, caddo, lake, texas lake, natural lake, Louisiana lake, boats, bird watching, sightseeing, Caddo businesses, Texas, caddo lake information, uncertain texas, swamp tour, swamp adventure, caddo indians, spanish moss, fishing, caddo lake history" />
          <link rel="apple-touch-icon" sizes="57x57" href="/public/images/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/public/images/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/public/images/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/public/images/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/public/images/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/public/images/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/public/images/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/public/images/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/public/images/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/public/images/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/public/images/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/public/images/favicon-16x16.png" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107758647-2"></script>
          <link rel="manifest" href="/public/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/public/images/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Navigation activeTab={this.props.activeTab} />
      </header>
    )
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  canonical: PropTypes.string,
}

export default Header