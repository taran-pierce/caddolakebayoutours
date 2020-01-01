import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuButton from '../components/MenuButton'

import './navigation.scss'

const links = [
  {
    "name": "About",
    "href": "/about"
  },
  {
    "name": "Directions",
    "href": "/directions"
  },
  {
    "name": "Things to do",
    "href": "/things-to-do"
  },
  {
    "name": "Photo Gallery",
    "href": "/photo-gallery"
  },
  {
    "name": "Contact",
    "href": "/contact"
  }
]

class Navigation extends React.Component {
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
      this.setState({ menuOpen: false })
    } else {
      this.setState({ menuOpen: true })
    }
  } 

  render() {
    return (
      <nav className={`header-nav`}>
        <ul className={'main-nav'}>
          <li>
            <Link href={'/'}>
              <a className={'logo'}>Caddo Lake Bayou Tours</a>
            </Link>
          </li>
          <li className={'dropdown'}>
            <MenuButton name={'bars'} toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
          </li>
        </ul>
        <ul className={this.state.menuOpen ? 'menu-open' : undefined}>
          {links.map( (link, index) => (
            <li key={index} className={this.props.activeTab === link.name.toLowerCase() ? 'active' : undefined}>
              <Link href={link.href}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  activeTab: PropTypes.string,
}

export default Navigation