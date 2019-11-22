import React from 'react';
import renderer from 'react-test-renderer';

import Header from './src/components/Header/Header.js'
import Footer from './src/components/Footer/Footer.js'
import SearchContainer from './src/components/SearchContainer/SearchContainer.js'

//Component Snapshot tests

describe('Header', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Header/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Footer', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Footer/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SearchContainer', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<SearchContainer/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
