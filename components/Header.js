import Head from 'next/head'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = ( props ) => {
  return (
    <header>
      <Head>
        <title>{props.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale: 1' />
        <link rel='shortcut icon' href='/static/images/favicon.ico' type='image/x-icon'></link>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700' rel='stylesheet'></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <style jsx>{`
        ul {
          list-style-type: none;
          padding: 0;
        }

        li {
          padding: 0 2rem;
        }
        li:first-child {
          padding-left: 0;
        }

        .main-nav {
          display: flex;
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

//Header.propTypes = {
//  title: PropTypes.string
//}

export default Header