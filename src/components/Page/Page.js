import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.js'
import SearchContainer from '../SearchContainer/SearchContainer.js'


class Page extends Component {


  render() {
    return (
      <div className="main">
        <Header bannerText="Search for flowers near you."/>
        <SearchContainer/>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps,{})(Page);
