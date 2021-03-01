import React from 'react';
import PropTypes, {
  string,
} from 'prop-types';
import Link from 'next/link';
import Navigation from '../Navigation';
import styles from './header.module.css';

function Header(props) {
  const {
    activePage,
  } = props;

  return (
    <>
      <header className={styles.container}>
        <div className={styles.column}>
          <p>
            <Link href={`/`}>
              <a>Caddo Lake Bayou Tours</a>
            </Link>
          </p>
        </div>
        <div className={styles.column}>
          <Navigation
            activePage={activePage}
          />
        </div>
      </header>
    </>
  );
}

Header.defaultProps = {
  activePage: '',
};

Header.propTypes = {
  activePage: string,
};

export default Header;