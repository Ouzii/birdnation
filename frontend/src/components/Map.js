import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: parseFloat(this.props.lat),
            lng: parseFloat(this.props.lng)
        }
    }

    
  render() {
    const MapWithMarker = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { this.state }
          defaultZoom = { 10 }
          mark
        >
        <Marker position={ this.state } />
        </GoogleMap>
     ));
     
    return (
      <div>
        <MapWithMarker
          containerElement={ <div style={{ height: `250px`, width: '250px', marginLeft: 'auto', marginRight: 'auto' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
    )
  }
}

export default Map
