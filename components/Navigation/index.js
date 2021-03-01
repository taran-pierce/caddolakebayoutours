import React from 'react';
import PropTypes, {
  string,
} from 'prop-types';
import Link from 'next/link';
import styles from './navigation.module.css';

function Navigation(props) {
  const {
    activePage,
  } = props;

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
  ];

  return (
    <nav>
      <ul className={styles.mainNavigation}>
        {links.map((link, index) => {
          const {
            href,
            name,
          } = link;

          const active = activePage === name.toLowerCase();
          const key = `${name.split(' ').join('_').toLowerCase()}-${index}`;

          return (
            <li key={key}>
              <Link href={href}>
                <a className={active ? 'active' : undefined}>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  activePage: '',
};

Navigation.propTypes = {
  activePage: string,
};

export default Navigation;