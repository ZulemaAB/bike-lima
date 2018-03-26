import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './MapContainer'
import './App.css'

class MyMap extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center iam">Here I'am</h3>
       <MapContainer google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDcm8g8VBYvPiNy9qWdhXMgtHZ-qsmKF3w',
  libraries: ['places']
})(MyMap)