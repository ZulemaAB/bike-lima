import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {

  componentDidUpdate() {
    this.loadMap(); 
  }

  loadMap() {
    if (this.props && this.props.google) { 
      const {google} = this.props; 
      const maps = google.maps; 

      const mapRef = this.refs.map; 
      const node = ReactDOM.findDOMNode(mapRef); 

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig); 

      // Marcador
      
      const image ='https://user-images.githubusercontent.com/32284212/37753349-77b909ee-2d6a-11e8-9520-03f677d49bf6.png';
      const marker = new google.maps.Marker({ 
        position:{ lat: -12.145141, lng:-77.021886 }, 
        map: this.map, 
        icon: image,
        title: "Here I'am"
      });
    }
  }

  render() {
    const style = { 
      width: '100vw', 
      height: '55vh' 
    }

    return ( 
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}

MapContainer.propTypes = {
  zoom: PropTypes.number.isRequired,
  initialCenter: PropTypes.object.isRequired
}

MapContainer.defaultProps = {
  zoom: 16,
  initialCenter: {
    lat: -12.145141,
    lng: -77.021886
  }
}