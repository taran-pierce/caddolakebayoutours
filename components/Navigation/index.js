import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.css';

function Navigation(props) {
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

          const key = `${name.split(' ').join('_').toLowerCase()}-${index}`;

          return (
            <li key={key}>
              <a href={href}>{name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default Navigation;