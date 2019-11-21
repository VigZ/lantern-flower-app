import React from 'react'
import { connect } from 'react-redux'

import './SearchContainer.scss';

import {fetchBusinessInfo} from '../../actions/search.js'


class SearchContainer extends React.Component {
  state = {
    searchTerm:""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetchBusinessInfo(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }

  handleGeocode = (e) => {

  }


  render() {

     return(
       <div className="searchContainer">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <input type="text" value={this.state.searchTerm} className="search rounded" placeholder="Please enter your location" ></input>
          </form>
          <button onClick={this.handleGeocode}>Use my location</button>
       </div>
        )
      }
}

const mapStateToProps = (state) => ({businessList: state.searchReducer.businessList})
export default connect(mapStateToProps,{fetchBusinessInfo})(SearchContainer);
