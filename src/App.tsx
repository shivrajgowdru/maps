import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import coords from 'leaflet'
import { geolocated } from 'react-geolocated';
import './App.css';

// var map = L.map('map').setView([13.026219912560387, 77.71343587939064]);//map initialization

const DEFAULT_LATITUDE = 13.023126;
const DEFAULT_LONGITUDE = 77.645134;

class App extends Component<any>{



  render() {

    const longitude = this.props.coords ? this.props.coords.longitude : DEFAULT_LONGITUDE;
    const latitude = this.props.coords ? this.props.coords.latitude : DEFAULT_LATITUDE;

    return (
      <div className="App">
        <h1>map locations</h1>

        <MapContainer id="map" className="Maps" center={[longitude, latitude]} zoom={13} scrollWheelZoom={true}>

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            !this.props.coords ?
              <div className='Loading'>Loading</div>
              :
              <Marker position={[longitude, latitude]}>
                <Popup>
                  <h1>you are currently here</h1>
                </Popup>
              </Marker>

          }

        </MapContainer>
      </div>
    );
  }
}


export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  }, userDecisionTimeout: 10000
})(App);

