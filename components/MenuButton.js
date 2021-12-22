import {
  func,
  bool,
} from 'prop-types';

import styles from './menuButton.module.scss';

function Icon({
  menuOpen, 
  toggleMenu, 
} ) {
  return (
    <div 
      className={menuOpen ? styles.menuButtonOpen : styles.menuButtonClosed} 
      onClick={toggleMenu}
    >
      {menuOpen ?
        (
          <a 
            href={`#`}
            className={styles.a}
          >
            <span className={styles.spanOpen} />
            <span className={styles.spanOpen} />
            <span className={styles.spanOpenLast} />
          </a>
        ) : 
        (
          <a 
            href={`#`}
            className={styles.a}
          >
            <span className={styles.spanClosed} />
            <span className={styles.spanClosed} />
            <span className={styles.spanClosedLast} />
          </a>
        )
      }
  </div>
  )
}

Icon.propTypes = {
  toggleMenu: func.isRequired,
  menuOpen: bool.isRequired,
};

export default Icon;
