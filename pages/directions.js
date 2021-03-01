import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Directions(props) {
  return (
    <>
      <Header
        activePage={`directions`}
      />
      <h1>Directions</h1>
    </>
  );
}

export default Directions;