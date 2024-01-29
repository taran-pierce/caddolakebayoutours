import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMenu } from '../utils/menuState';

import styles from './header.module.scss';

export default function Header() {
  const [domLoaded, setDomLoaded] = useState(false);
  const { closeMenu } = useMenu();

  function handleClick() {
    closeMenu();
  }

  const CoreButton = () => {
    return (
      <>
        <div
          className={`fb-like`}
          data-href="//www.facebook.com/caddotours/"
          data-width="170px"
          data-layout="button"
          data-action="like"
          data-size="large"
          data-show-faces="true"
          data-share="true"
        />
      </>
    )
  };

  useEffect(() => {
    setDomLoaded(true);
  }, []);

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
        {domLoaded && (
          <CoreButton />
        )}
      </div>
    </header>
  );
};
