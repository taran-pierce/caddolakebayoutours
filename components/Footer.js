import {
  array,
  object,
} from 'prop-types'
import Link from 'next/link';

import styles from './footer.module.scss'

const year = new Date().getFullYear();

const Footer = ( {
  links,
  facebook,
} ) => {
  const quickLinks = [
    {
      href: 'http://shadygladeresort.com/',
      name: 'Shady Glade Resort',
    },
    {
      href: 'https://carriagehousejefferson.com/',
      name: 'Carriage House Bed and Breakfast',
    },
    {
      href: 'https://riverbendoutfitters.com/',
      name: 'Riverbend Outfitters',
    },
    {
      href: 'https://www.travelawaits.com/2552685/outdoor-activities-near-jefferson-texas/',
      name: 'TravelAwaits',
    },
    {
      href: 'https://www.moonglowlodge.com/',
      name: 'Moonglow Lodge',
    },
    {
      href: 'https://www.hodgepodgecottages.com/',
      name: 'HodgePodge Cottages',
    },
    {
      href: 'https://www.mikemoirphotography.com/',
      name: 'Mike Moir Photography',
    },
    {
      href: 'https://westerman.photo/index.php/travels/jefferson-texas/',
      name: 'WesterBlog',
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h2 className={styles.h4}>Sitemap</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href={`/`}>
                <a>Home</a>
              </Link>
            </li>
            {links.map( (link, index) => (
              <li key={index} className={styles.li}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.ul}>
            <li className={styles.li}>Like us on FaceBook!</li>
            <li className={styles.li}>
              <div className={`fb-like`} data-href="//www.facebook.com/caddotours/" data-width="260px" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
            </li>
          </ul>
        </div>
        <div className={styles.map}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div className={styles.addressBlock}>
            <p>Rich McFarland, Tour Guide</p>
            <p>U.S. Coast Guard Merchant Marine Captain License</p>
            <p><strong>Address:</strong> 449 Cypress Drive, Uncertain TX 75661</p>
            <p><strong>Phone: </strong><a href={`tel:1-903-570-2169`}>903-570-2169</a></p>
          </div>
        </div>
        <div className={styles.item}>
          <h2 className={styles.h4}>Quick Links</h2>
          <ul className={styles.ul}>
            {quickLinks.map(quickLink => (
              <li 
                key={quickLink.href}
                className={styles.li}
              >
                <a
                  href={quickLink.href}
                  target={`_blank`}
                  rel={`noopener`}
                >{quickLink.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>Copyright {year} &copy;</p>
    </footer>
  )
}

Footer.defaultProps = {
  facebook: {},
};

Footer.propTypes = {
  links: array.isRequired,
  facebook: object,
}

export default Footer;
