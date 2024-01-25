'use client'

import { object } from 'prop-types';

export function Page() {
  return (
    <main>
      <h1>Hello Home Page!</h1>
      <div className="hero">Hero</div>
      <div className="split-content">Split Content</div>
      <div className="split-content">Split Content</div>
      <div className="split-content">Split Content</div>
      <div className="split-content">Split Content</div>
      <div className="split-content">Split Content</div>
    </main>
    );
};

Page.propTypes = {
  query: object,
};

export default Page;
