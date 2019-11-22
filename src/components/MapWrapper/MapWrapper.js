import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


import './MapWrapper.scss';

import { DEFAULT_COORDS, DEFAULT_ZOOM, GOOGLE_MAP_KEY } from '../../constants'




class MapWrapper extends Component {

  displayMarkers = () => {
  return this.props.locations.map((location, index) => {
    return <Marker
      key={index}
      id={index}
      position={{
         lat: location.coordinates.latitude,
         lng: location.coordinates.longitude,
       }}
      icon={{url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" }}
      onClick={() => console.log("You clicked me!")} />
  })
}

  render() {
    return (
      <div className="mapWrapper">
        <Map
          google={this.props.google}
          zoom={DEFAULT_ZOOM}
          style={{maxWidth: '500px', maxHeight: '500px',}}
          initialCenter={{ lat: DEFAULT_COORDS.lat, lng: DEFAULT_COORDS.lng}}>
        {this.displayMarkers()}
        </Map>
      </div>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(MapWrapper);

MapWrapper.propTypes = {
businesses: PropTypes.array
}

MapWrapper.defaultProps = {
  locations: []
}
