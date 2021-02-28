import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

Enzyme.configure({adapter: new Adapter()});

describe('Does the <Header /> render properly?', () => {
  it('contains a <header> element', () => {
    const component = shallow(<Header />);

    const header = component.find('header');

    expect(header.exists()).toBe(true);
  });
});