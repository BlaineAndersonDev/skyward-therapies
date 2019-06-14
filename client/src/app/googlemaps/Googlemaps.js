import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Googlemaps.css';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class Googlemaps extends Component {

  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  };

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  render() {
    return (
      <div id='gmapsContainer'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAuS8rnGhZC5VZBBVAp2pkNhHmkB6RTGs8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          >
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ "Where's Waldo?" }
          />
        </GoogleMapReact>
      </div>
    )
  };
};

export default Googlemaps;
