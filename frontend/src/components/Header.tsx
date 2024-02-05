// import Link from 'next/link';
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
// import FaceBookButton from './FaceBookButton';
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
          {/* TODO temp until figure out bug with next link and Facebook */}
          {/* <Link 
            href={{
              pathname: "/"
            }}
            onClick={() => handleClick()}
          > */}
            <a href="/" onClick={() => handleClick()}>
              <h1>Caddo Lake Bayou Tours</h1>
            </a>
          {/* </Link> */}
          <MenuToggle />
        </div>
        <Navigation />
        {/* <FaceBookButton /> */}
      </div>
    </header>
  );
};
