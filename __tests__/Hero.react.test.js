import React from 'react';
import Enzyme, {
  shallow,
  mount,
} from 'enzyme';
import * as renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import Hero from '../components/Hero';

const content = require('../__content__/hero').default;

Enzyme.configure({adapter: new Adapter()});

const {
  altText: componentAltText,
  imageSrc: componentImageSrc,
} = content;

describe('Does the <Hero /> render at desktop properly?', () => {
  it('contains a <section> element', () => {
    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    expect(component.find('section').exists()).toBe(true);
  });

  it('contains src for the image', () => {
    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    const image = component.find('img');
    const imageSrc = image.prop('src');

    expect(imageSrc.length > 0).toBe(true);
  });

  it('contains alt text for the image', () => {
    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    const altText = component.find('img').prop('alt');

    expect(altText).toBe(componentAltText);
  });

  it('contains a width on the image', () => {
    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    const imageWidth = component.find('img').prop('width');

    expect(imageWidth > 0).toBe(true);
  });

  // TODO width does not update properly for some reason
  it.skip('should be the proper width', () => {
    global.innerWidth = 320;

    global.dispatchEvent(new Event('resize'));

    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    const imageWidth = component.find('img').prop('width');

    expect(imageWidth).toBe(320);
  });

  it('contains a height on the image', () => {
    const component = shallow(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    );

    const imageHeight = component.find('img').prop('height');

    expect(imageHeight > 0).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(
      <Hero
        altText={componentAltText}
        imageSrc={componentImageSrc}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});