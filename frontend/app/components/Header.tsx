import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
import Link from 'next/link';
import { useMenu } from '../utils/menuState';

import styles from './header.module.scss';

export default function Header() {
  const { closeMenu } = useMenu();

  function handleClick() {
    closeMenu();
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <Link 
            href={{
              pathname: "/"
            }}
            onClick={() => handleClick()}
          >
            <h1>Caddo Lake Bayou Tours</h1>
          </Link>
          <MenuToggle />
        </div>
        <Navigation />
      </div>
    </header>
  );
};
