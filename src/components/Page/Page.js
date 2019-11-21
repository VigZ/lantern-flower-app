import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.js'


class Page extends Component {


  render() {
    return (
      <div class="main">
        <Header bannerText="Search for flowers near you."/>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps,{})(Page);
