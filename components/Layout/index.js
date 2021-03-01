import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

import styles from './layout.module.css';

function Layout(props) {
  const {
    children,
  } = props;

  return (
    <div className={styles.mainBody}>
      <Header activePage={`/`} />
      {children}
    </div>
  );
}

export default Layout;