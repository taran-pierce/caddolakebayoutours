import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/Navigation';

Enzyme.configure({adapter: new Adapter()});

describe('Does the <Navigation /> render properly?', () => {
  it('contains a <nav> element', () => {
    const component = shallow(<Navigation />);

    const nav = component.find('nav');

    expect(nav.exists()).toBe(true);
  });
});