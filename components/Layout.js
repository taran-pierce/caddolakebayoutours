import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

import './layout.scss'

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
]

const Layout = ( props ) => {
  const { pageTitle, canonical } = props

    return (
      <div className={`container`}>
        {props.children}
        <Footer links={links} />
      </div>
    )
}

Layout.propTypes = {
  pageTitle: PropTypes.string,
  canonical: PropTypes.string,
}

export default Layout