import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes, {
  string,
  bool,
} from 'prop-types';
import Link from 'next/link';
import styles from './navigation.module.css';

const Navigation = (props) => {
  const {
    activePage,
  } = props;

  const links = [
    {
      "name": "About",
      "href": "/about/"
    },
    {
      "name": "Directions",
      "href": "/directions/"
    },
    {
      "name": "Things to do",
      "href": "/things-to-do/"
    },
    {
      "name": "Photo Gallery",
      "href": "/photo-gallery/"
    },
    {
      "name": "Contact",
      "href": "/contact/"
    }
  ];

  // toggle mobile Nav open/closed
  const clickHandler = (e) => {
    e.preventDefault;

    setIsNavOpen(!isNavOpen);
  }

  // should these be in the Navigation component?
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // set mobile state
  useEffect(() => {
    const shouldBeMobile = window?.innerWidth <= 768;

    setIsMobile(shouldBeMobile);
  }, []);

  const MobileNav = () => {
    const {
      mobileMenu,
      mobileNavWrapperClosed,
      mobileNavWrapperOpen,
      mobileNavBar,
      mobileNavBarOpen,
    } = styles;

    return (
      <div
        className={(isMobile && !isNavOpen) ? mobileNavWrapperClosed : mobileNavWrapperOpen}
      >
        <a
          href={`#`}
          onClick={clickHandler}
          className={mobileMenu}
        >
          <span className={(isMobile && !isNavOpen) ? mobileNavBar : mobileNavBarOpen} />
          <span className={(isMobile && !isNavOpen) ? mobileNavBar : mobileNavBarOpen} />
          <span className={(isMobile && !isNavOpen) ? mobileNavBar : mobileNavBarOpen} />
        </a>
      </div>
    );
  };

  return (
    <nav>
      {isMobile && <MobileNav />}
      <ul className={(isMobile && !isNavOpen) ? styles.mainNavigationClosed : styles.mainNavigation}>
        {links.map((link, index) => {
          const {
            href,
            name,
          } = link;

          const active = activePage === name.toLowerCase();
          const key = `${name.split(' ').join('_').toLowerCase()}-${index}`;

          return (
            <li key={key}>
              <Link href={href}>
                <a className={active ? 'active' : undefined}>{name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  activePage: '',
  isNavOpen: false,
};

Navigation.propTypes = {
  activePage: string,
  isNavOpen: bool,
};

export default Navigation;