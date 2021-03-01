import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function Contact(props) {
  return (
    <>
      <Header
        activePage={`contact`}
      />
      <h1>Contact</h1>
    </>
  );
}

export default Contact;