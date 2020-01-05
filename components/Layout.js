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
    return (
      <main>
        <div className={`container`}>
          <Header pageTitle={props.pageTitle} canonical={props.canonical} links={links} />
          {props.children}
          <Footer links={links} />
        </div>
      </main>
    )
}

export default Layout