import React from 'react';
import PropTypes from 'prop-types';

function MyApp({Component, pageProps}) {
  console.log({pageProps});

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;