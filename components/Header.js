import PropTypes from 'prop-types'
import Head from 'next/head'
import Navigation from '../components/Navigation'

import './header.scss'

class Header extends React.Component {

  render() {
    const { pageTitle, activeTab, canonical, links } = this.props

    return (
      <header>
        <Head>
          <title>{pageTitle}</title>
          <link rel={`canonical`} href={`https://www.caddolakebayoutours.com${canonical}`} />
        </Head>
        <Navigation activeTab={activeTab} links={links} />
      </header>
    )
  }
}

Header.propTypes = {
  pageTitle: PropTypes.string,
  canonical: PropTypes.string,
  links: PropTypes.array,
  activeTab: PropTypes.string,
}

export default Header