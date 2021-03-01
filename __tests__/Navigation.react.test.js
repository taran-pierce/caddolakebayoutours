import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import * as renderer from "react-test-renderer";
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/Navigation';

const content = require('../__content__/navigation').default;

Enzyme.configure({adapter: new Adapter()});

const {
  links: componentLinks,
  activePage: componentActivePage,
} = content;

describe('Does the <Navigation /> render properly?', () => {
  it('contains a <nav> element', () => {
    const component = shallow(<Navigation />);

    const nav = component.find('nav');

    expect(nav.exists()).toBe(true);
  });

  it('has expected amount of links', () => {
    const component = shallow(<Navigation />);

    const navLinks = component.find('nav a');

    expect(componentLinks.length).toEqual(navLinks.length);
  });

  it('defaults to on Active Page selected', () => {
    const component = shallow(<Navigation />);

    const nav = component.find('nav .active');

    expect(nav.exists()).toBe(false);
  });

  it('renders with activePage properly', () => {
    const component = shallow(<Navigation activePage={componentActivePage} />);

    const nav = component.find('nav .active');

    expect(nav.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Navigation activePage={componentActivePage} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});