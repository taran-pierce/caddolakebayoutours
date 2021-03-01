import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function About(props) {
  return (
    <>
      <Header
        activePage={`about`}
      />
      <h1>About</h1>
    </>
  );
}

export default About;