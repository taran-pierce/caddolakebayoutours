'use client'

import Link from 'next/link';
import { useMenu } from '../utils/menuState.js';

import styles from './navigation.module.scss';

const links = [
  {
    name: 'About',
    href: '/about/'
  },
  {
    name: 'Directions',
    href: '/directions/'
  },
  {
    name: 'Things to Do',
    href: '/things-to-do/'
  },
  {
    name: 'Photo Gallery',
    href: '/photo-gallery/'
  },
  {
    name: 'Contact',
    href: '/contact/'
  },
];

export default function Navigation() {
  const {
    menuOpen,
    closeMenu,
  } = useMenu();

  const navigationClass = menuOpen ? styles.menuOpen : styles.menuClose;

  function handleClick(e: any) {
    closeMenu();
  }

  return (
    <nav role="navigation" aria-label="Main Navigation" className={navigationClass} id="main-nav">  
      <ul className={styles.navigation}>
        {links && links.map((link) => (
          <li key={link.name}>
            <Link 
              href={{
                pathname: link.href,
              }}
              onClick={(e) => handleClick(e)}
            >{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
