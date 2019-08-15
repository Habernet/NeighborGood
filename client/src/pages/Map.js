
import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import API from '../utils/API';


class MapLeaflet extends React.Component {
    state = {
lat:"",
lng:""  ,
address:"10230, Broadstone way,nc 27502"
 };
  
    componentDidMount() {
        API.getUserAddrLatLong(this.state.address)
            .then(res => {this.setState({ lat: res.data.results[0].locations[0].latLng.lat,lng:res.data.results[0].locations[0].latLng.lng });console.log(this.state.latthis.state.lng)})
            .catch(err => console.log(err));
      
        }
        
  render() {
    return (
      <Map style={{width:'300px',height:'300px'}}
        center={[this.state.lat, this.state.lng]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[this.state.lat, this.state.lng]}>
          <Popup>
{this.state.address}
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapLeaflet;

