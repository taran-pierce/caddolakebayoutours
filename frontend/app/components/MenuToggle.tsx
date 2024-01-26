'use client'

import { useMenu } from "../utils/menuState";
import { getWindowDimensions } from '../utils/getDimensions';

import styles from './menuToggle.module.scss';

export default function MenuToggle() {
  // data for the menu
  const { toggleMenu, menuOpen } = useMenu();
  

  const { height, width } = getWindowDimensions();

  // return null if width is undefined or is desktop size
  if (!width) { return null; }
  if ( width && width >= 992) { return null; }

  function handleClick() {
    toggleMenu();
  }

  const menuStyles = menuOpen ? styles.active : '';

  return (
    <div className={styles.buttonWrapper}>
      <button
        type="button"
        onClick={handleClick}
        className={menuStyles}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-haspopup="true"
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
};
