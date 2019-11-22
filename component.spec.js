import React from 'react';
import TestRenderer from 'react-test-renderer';

import Header from './src/components/Header/Header.js'
import Footer from './src/components/Footer/Footer.js'
import ResultCard from './src/components/ResultCard/ResultCard.js'

// Functional component tests

describe('Header and Footer', () => {
  it('should render the header component without failing', () => {
    const testRenderer = TestRenderer.create(<Header />)
    const testInstance = testRenderer.root
    expect(testInstance.props.bannerText.toBe(''))
  })
  it('should render the footer component without failing', () => {
    const testRenderer = TestRenderer.create(<Header />)
    const testInstance = testRenderer.root
    expect(testInstance.props.footerText.toBe(''))
  })
})
