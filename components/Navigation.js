import { useState } from 'react';
import {
  string,
  array,
  func,
  bool,
} from 'prop-types';
import MenuButton from '../components/MenuButton';
import Link from 'next/link';

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
          <Link href={`/`}>
            <a className={styles.logo}>Caddo Lake Bayou Tours</a>
          </Link>
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
            <Link href={link.href}>
              <a className={styles.a}>{link.name}</a>
            </Link>
          </li>
        ))}
        <li className={styles.socialLink}>
          <div className={styles.fbLike}>
            <span className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="170px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true" />
          </div>
        </li>
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  activeTab: '',
};

Navigation.propTypes = {
  activeTab: string,
  links: array.isRequired,
  toggleMenu: func.isRequired,
  menuOpen: bool.isRequired,
}

export default Navigation;
