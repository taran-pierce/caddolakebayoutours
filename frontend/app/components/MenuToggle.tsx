'use client'

import { useMenu } from "../utils/menuState";

import styles from './menuToggle.module.scss';

export default function MenuToggle() {
  const { toggleMenu, menuOpen } = useMenu();

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
}