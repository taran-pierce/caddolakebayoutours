import { DOMAttributes } from 'react';

import styles from './googleMap.module.scss';

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

// TODO look into the various things that can be configured
// https://github.com/googlemaps/extended-component-library
// https://developers.google.com/maps/documentation/javascript/reference/advanced-markers
export default function GoogleMap() {
  return (
    <gmp-map
      center="32.71221923828125,-94.12107849121094"
      zoom="17"
      map-id="caddo-lake-location"
    >
      <gmp-advanced-marker 
        position="32.71221923828125,-94.12107849121094"
        title="Caddo Lake Bayou Tours"
        aria-label="Caddo Lake Bayou Tours"
        role="img"
      />
    </gmp-map>
  );
}
