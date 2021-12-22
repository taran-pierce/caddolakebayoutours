import { useState } from 'react';
import PropTypes from 'prop-types';
import MenuButton from '../components/MenuButton';

import styles from './navigation.module.scss';

function Navigation({
  links,
  activeTab,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault()
  
    setMenuOpen(!menuOpen);
  };

  // TODO still need to set up roles and names for keyboard control: ADA
  return (
    <nav className={menuOpen ? styles.headerNavOpen : styles.headerNav}>
      <ul className={styles.mainNav}>
        <li className={styles.li}>
          <a className={styles.logo} href={`/`}>Caddo Lake Bayou Tours</a>
        </li>
        <li className={styles.dropdown}>
          <MenuButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </li>
      </ul>
      <ul className={styles.secondaryNav}>
        {links.map( (link, index) => (
          <li 
            key={index} 
            className={activeTab === link.name.toLowerCase() ? styles.li : styles.li}
          >
            <a 
              href={link.href}
              className={styles.a}
            >{link.name}</a>
          </li>
        ))}
        <li className={styles.socialLink}>
          <div>
            <span className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="170px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  activeTab: PropTypes.string,
  links: PropTypes.array,
  toggleMenu: PropTypes.func,
  menuOpen: PropTypes.bool,
}

export default Navigation;
