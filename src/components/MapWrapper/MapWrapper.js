import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import { DEFAULT_COORDS, DEFAULT_ZOOM, GOOGLE_MAP_KEY } from '../../constants'


class MapWrapper extends Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={DEFAULT_ZOOM}
        style={mapStyles}
        initialCenter={{ lat: DEFAULT_COORDS.lat, lng: DEFAULT_COORDS.lng}}
      />
  );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(MapWrapper);

const mapStyles = {
  width: '500px',
  height: '500px',
};
