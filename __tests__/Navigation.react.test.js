import React from 'react';
import Enzyme, {
  shallow,
  mount,
} from 'enzyme';
import * as renderer from "react-test-renderer";
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../components/Navigation';

const content = require('../__content__/navigation').default;

Enzyme.configure({adapter: new Adapter()});

const {
  links: componentLinks,
  activePage: componentActivePage,
} = content;

describe('Does the <Navigation /> render at desktop properly?', () => {
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
    const tree = renderer.create(
      <Navigation activePage={componentActivePage} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Does the <Navigation /> render at mobile properly?', () => {
  beforeEach(() => {
    global.innerWidth = 320;

    global.dispatchEvent(new Event('resize'));
  });

  it('has the <MobileNav>', () => {
    const component = mount(
      <Navigation
        activePage={componentActivePage}
      />);

    const mobileNav = component.find('MobileNav');

    // mobile nav only renders in certain viewports
    expect(mobileNav.exists()).toBe(true);
  });

  it('defaults to closed nav state', () => {
    const component = mount(
      <Navigation
        activePage={componentActivePage}
      />);

    const mobileNav = component.find('.mobileNavWrapperClosed');

    // mobile nav only renders in certain viewports
    expect(mobileNav.exists()).toBe(true);
  });

  it('can toggle mobile nav state properly', () => {
    const component = mount(
      <Navigation
        activePage={componentActivePage}
      />);

    // dropdown should not be visible to start
    const dropdownMenu = component.find('.mainNavigation');

    expect(dropdownMenu.exists()).toBe(false);

    // click mobileMenu button
    const menuButton = component.find('.mobileMenu');

    menuButton.simulate('click');

    component.update();

    // dropdown should be visible
    const dropdownMenuAfterClick = component.find('.mainNavigation');

    expect(dropdownMenuAfterClick.exists()).toBe(true);
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <Navigation activePage={componentActivePage} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});