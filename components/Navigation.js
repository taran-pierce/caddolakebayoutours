import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuButton from '../components/MenuButton'

import './navigation.scss'

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
    const { links } = this.props

    // TODO still need to set up roles and names for keyboard control: ADA
    return (
      <nav className={this.state.menuOpen ? 'header-nav menu-open' : 'header-nav'}>
        <ul className={'main-nav'}>
          <li>
            <Link href={'/'}>
              <a className={'logo'}>Caddo Lake Bayou Tours</a>
            </Link>
          </li>
          <li className={'dropdown'}>
            <MenuButton toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
          </li>
        </ul>
        <ul className={`secondary-nav`}>
          {links.map( (link, index) => (
            <li key={index} className={this.props.activeTab === link.name.toLowerCase() ? 'active' : undefined}>
              <Link href={link.href}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
          <li>
            <div className={`social-link`}>
              <div className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="260px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  activeTab: PropTypes.string,
}

export default Navigation