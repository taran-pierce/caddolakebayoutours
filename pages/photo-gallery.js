import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function PhotoGallery(props) {
  return (
    <>
      <Header
        activePage={`photo-gallery`}
      />
      <h1>PhotoGallery</h1>
    </>
  );
}

export default PhotoGallery;