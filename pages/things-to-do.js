import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

function ThingsToDo(props) {
  return (
    <>
      <Header
        activePage={`things-to-do`}
      />
      <h1>ThingsToDo</h1>
    </>
  );
}

export default ThingsToDo;