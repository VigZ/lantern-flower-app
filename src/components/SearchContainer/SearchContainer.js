import React from 'react'
import { connect } from 'react-redux'

import './SearchContainer.scss';

import ResultsList from '../ResultsList/ResultsList.js'
import Map from '../Map/Map.js'

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
    this.props.fetchBusinessInfo(this.state.searchTerm)
    this.setState({
      searchTerm: ""
    })
  }

  sendPosition = (position) => {
      this.props.fetchBusinessInfo(`${position.coords.latitude} ${position.coords.longitude}`) ;
    }

  handleGeocode = (e) => {
      if (navigator.geolocation) {
      let coords = navigator.geolocation.getCurrentPosition(this.sendPosition);

      }
    }

  render() {

     return(
       <div className="searchContainer">
         <div className="searchRow">
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <input type="text" value={this.state.searchTerm} className="search rounded" placeholder="Please enter your location" ></input>
            </form>
            <button onClick={this.handleGeocode}>Use my location</button>
         </div>
         <Map/>
         <ResultsList resultsList={this.props.businessList}/>
       </div>
        )
      }
}

const mapStateToProps = (state) => ({businessList: state.searchReducer.businessList})
export default connect(mapStateToProps,{fetchBusinessInfo})(SearchContainer);
