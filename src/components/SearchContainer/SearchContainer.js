import React from 'react'
import { connect } from 'react-redux'


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


  render() {

     return(
       <div className="searchContainer">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <span><input type="text" value={this.state.searchTerm} className="search rounded" placeholder="Please enter your location" ></input></span>
          </form>
       </div>
        )
      }
}

export default SearchContainer
