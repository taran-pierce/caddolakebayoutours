import Link from 'next/link';
import Container from './Container';
import { links } from './Navigation';

import styles from './footer.module.scss';

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

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h2 className={styles.heading}>Sitemap</h2>
          <ul className={styles.listItems}>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            className={styles.map}
          />
          <div className={styles.addressBlock}>
            <p>Rich McFarland, Tour Guide</p>
            <p>U.S. Coast Guard Merchant Marine Captain License</p>
            <p><strong>Address:</strong> 449 Cypress Drive, Uncertain TX 75661</p>
            <p><strong>Phone: </strong><a href={`tel:1-903-570-2169`}>903-570-2169</a></p>
          </div>
        </div>
        <div>
          <h2 className={styles.heading}>Quick Links</h2>
          <ul className={styles.listItems}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} target="_blank" rel="noopener">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
