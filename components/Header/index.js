import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import styles from './header.module.css';

function Header(props) {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.column}>
          <p>
            <a href={`/`}>Caddo Lake Bayou Tours</a>
          </p>
        </div>
        <div className={styles.column}>
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;