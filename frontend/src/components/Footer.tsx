// import Link from 'next/link';
import GoogleMap from './GoogleMap';
import Container from './Container';
import { links } from './Navigation';
import FaceBookButton from './FaceBookButton';

import styles from './footer.module.scss';

export const quickLinks = [
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

export default function Footer() {
  return (
    <footer data-testid='footer'>
      <Container borderTop>
        <div className={styles.grid}>
          <div
            className={styles.sitemap}
            data-testid='sitemap'
          >
            <h2 className={styles.heading}>Sitemap</h2>
            <ul className={styles.listItems}>
              {links.map((link) => (
                <li key={link.name}>
                  {/* TODO temp until figure out bug with next link and Facebook */}
                  {/* <Link href={link.href}>{link.name}</Link> */}
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className={styles.facebookComponentWrapper}>
                <FaceBookButton />
              </li>
            </ul>
          </div>
          <div
            className={styles.mapColumn}
            data-testid='google-map'
          >
            <GoogleMap id='footer-map' />
            <div className={styles.addressBlock}>
              <p>Rich McFarland, Tour Guide</p>
              <p>U.S. Coast Guard Merchant Marine Captain License</p>
              <p><strong>Address:</strong> 449 Cypress Drive, Uncertain TX 75661</p>
              <p><strong>Phone: </strong><a href={`tel:1-903-570-2169`}>903-570-2169</a></p>
            </div>
          </div>
          <div
            className={styles.quickLinks}
            data-testid='quick-link'
          >
            <h2 className={styles.heading}>Quick Links</h2>
            <ul className={styles.listItems}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} target='_blank' rel='noopener'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
