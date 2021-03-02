import React from 'react';
import Enzyme, {
  shallow,
  mount,
} from 'enzyme';
import * as renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import SideHug from '../components/SideHug';

// const content = require('../__content__/hero').default;

Enzyme.configure({adapter: new Adapter()});

// const {
//   altText: componentAltText,
//   imageSrc: componentImageSrc,
// } = content;

describe('Does the <Hero /> render at desktop properly?', () => {
  it.skip('contains a <section> element', () => {
    const component = shallow(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    );

    expect(component.find('section').exists()).toBe(true);
  });

  it.skip('contains src for the image', () => {
    const component = shallow(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    );

    const image = component.find('img');
    const imageSrc = image.prop('src');

    expect(imageSrc.length > 0).toBe(true);
  });

  it.skip('contains alt text for the image', () => {
    const component = shallow(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    );

    const altText = component.find('img').prop('alt');

    expect(altText).toBe(componentAltText);
  });

  it.skip('contains a width on the image', () => {
    const component = shallow(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
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
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    );

    const imageWidth = component.find('img').prop('width');

    expect(imageWidth).toBe(320);
  });

  it('contains a height on the image', () => {
    const component = shallow(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    );

    const imageHeight = component.find('img').prop('height');

    expect(imageHeight > 0).toBe(true);
  });

  it.skip('matches the snapshot', () => {
    const tree = renderer.create(
      <SideHug
        mainHeadline={`Test`}
        bodyCopy={`test two`}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});