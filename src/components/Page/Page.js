import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header.js'


class Page extends Component {


  render() {
    return (
      <div class="main">
        <Header/>
      </div>

    );
  }
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps,{})(Page);
