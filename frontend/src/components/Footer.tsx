import Link from 'next/link';
import Container from './Container';
import { links } from './Navigation';
import { DOMAttributes } from 'react';

import styles from './footer.module.scss';

// TODO probably a better way to type the Google Map
// using their library that provides the Web Component though
// and the docs did not go over how to type those specifically
type GoogleMap<T> = Partial<T & DOMAttributes<T> & {
  children: any,
  center: any,
  zoom: any,
  style: any,
  "map-id": any,
}>;

type GoogleMapMarker<T> = Partial<T & DOMAttributes<T> & {
  children: any,
  position: any,
  title: any,
}>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['gmp-map']: GoogleMap<any>;
      ['gmp-advanced-marker']: GoogleMapMarker<any>;
    }
  }
}

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
      <Container borderTop>
        <div className={styles.grid}>
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
            {/* TODO look into the various things that can be configured */}
            {/*  https://github.com/googlemaps/extended-component-library */}
            {/*  https://developers.google.com/maps/documentation/javascript/reference/advanced-markers */}
            <gmp-map
              center="32.71221923828125,-94.12107849121094"
              zoom="17"
              map-id="caddo-lake-location"
              style={{
                maxHeight: 400,
              }}
            >
              <gmp-advanced-marker position="32.71221923828125,-94.12107849121094" title="Caddo Lake Bayou Tours"></gmp-advanced-marker>
            </gmp-map>
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
        </div>
      </Container>
    </footer>
  );
}
