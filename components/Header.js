import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'
import MenuButton from '../components/MenuButton'

class Header extends React.Component {
  constructor( props ) {
    super( props )
  
    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu( event ) {
    event.preventDefault()

    if ( this.state.menuOpen ) {
      this.setState({ menuOpen: 0 })
    } else {
      this.setState({ menuOpen: 1 })
    }
  }
  
  render() {
    return (
      <header>
      <Head>
        <title>Caddo Lake Bayou Tours</title>
        <meta name='viewport' content='width=device-width, initial-scale: 1' />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={'https://www.caddolakebayoutours.com'} />
        <link rel='shortcut icon' href='/static/images/favicon.ico' type='image/x-icon'></link>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700' rel='stylesheet'></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <meta name="author" content="Taran Pierce" />
        <meta name="description" content="Caddo Lake Bayou Tours offers a guided tour of the beautiful Caddo Lake at any time from sunrise to sunset. Whether you are looking for a guided fishing
  tour, observe some of nature's wildlife, catch a jaw-dropping sunrise or sunset, take in some of the historic Caddo Lake culture or just enjoy some relaxing sight-seeing you are in for quite
   a treat. Book a boat tour with Caddo Lake Bayou Tours and experience the wonder for yourself." />
        <meta name="keywords" content="Caddo Lake boat tours, bayou tours, caddo lake tour, tours of Caddo Lake, caddo lake photos, guided fishing trip, cypress lake, caddo lake history, jefferson
  texas boat tours, alligator bayou tours, lake bayou, fishing trip, fishing tour, fishing guide tours, river tours, Caddo Lake, caddo lake bayou tours, caddo lake tour guide, fishing guide, travel agency, sunrise tours, sunset tours, swamp tours, caddo lake swamp, boat tours, personal tours, backwater, wildlife tours, gator, alligator, lake guide, caddo, lake, texas lake, natural lake, Louisiana lake, boats, bird watching, sightseeing, Caddo businesses, Texas, caddo lake information, uncertain texas, swamp tour, swamp adventure, caddo indians, spanish moss, fishing, caddo lake history" />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/images/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/images/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/images/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/images/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/images/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/static/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/images/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107758647-2"></script>
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/static/images/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 1.5rem 1rem;
        }

        .main-nav {
          display: flex;
        }

        .main-nav li {
          flex-grow: 1;
        }

        .nav {
          display: none;
        }
      `}</style>
      <nav>
        <ul className={'main-nav'}>
          <li>
            <Link href={'/'}>
              <a>Caddo Lake Bayou Tours</a>
            </Link>
          </li>
          <li>
            <MenuButton name={'bars'} toggleMenu={this.toggleMenu} />
          </li>
        </ul>
        <ul className={'nav'}>
          <li>
                <Link href={'/about'}>
                  <a>About</a>
                </Link>
              </li>
          <li>
                <Link href={'/directions'}>
                  <a>Directions</a>
                </Link>
              </li>
          <li>            
                <Link href={'/things-to-do'}>
                  <a>Things to do</a>
                </Link>
              </li>
          <li>
                <Link href={'/photos'}>
                  <a>Photos</a>
                </Link>
              </li>
          <li>
                <Link href={'/contact'}>
                  <a>Contact</a>
                </Link>
              </li>
        </ul>
      </nav>
      </header>
    )
  }
}

export default Header