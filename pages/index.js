import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import SideHug from '../components/SideHug';

function Index(props) {
  return (
    <>
      <Layout>
        <Hero
          altText={`Testing alt text`}
          imageSrc={`/images/sunset-10-xl.jpg`}
        />
        <SideHug
          mainHeadline={`Taran it up`}
          bodyCopy={`some other stuff`}
          image={{
            src: '/blah.jpg',
            altText: 'Test'
          }}
          imageOnLeft={true}
        />
      </Layout>
    </>
  );
}

export default Index;