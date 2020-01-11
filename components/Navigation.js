import PropTypes from 'prop-types'
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
    const { links, activeTab } = this.props
    const { menuOpen } = this.state

    // TODO still need to set up roles and names for keyboard control: ADA
    return (
      <nav className={menuOpen ? 'header-nav menu-open' : 'header-nav'}>
        <ul className={'main-nav'}>
          <li>
            <a className={'logo'} href={`/`}>Caddo Lake Bayou Tours</a>
          </li>
          <li className={'dropdown'}>
            <MenuButton toggleMenu={this.toggleMenu} menuOpen={menuOpen} />
          </li>
        </ul>
        <ul className={`secondary-nav`}>
          {links.map( (link, index) => (
            <li key={index} className={activeTab === link.name.toLowerCase() ? 'active' : undefined}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li className={`social-link`}>
            <div>
              <div className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="170px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  activeTab: PropTypes.string,
  links: PropTypes.array,
  toggleMenu: PropTypes.func,
  menuOpen: PropTypes.bool,
}

export default Navigation