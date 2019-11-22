import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { DEFAULT_COORDS, GOOGLE_MAP_KEY } from '../../constants'


class Map extends Component {
  render() {
    return (
      <div className='mapContainer'>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;

Map.defeaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11,
}
