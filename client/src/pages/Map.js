// import React, { Component } from 'react'
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

// // type State = {
// //   lat: number,
// //   lng: number,
// //   zoom: number,
// // }

// export default class SimpleExample extends Component {
//   state = {
//     lat: 51.505,
//     lng: -0.09,
//     zoom: 13,
//   }

//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map style={{width:'500px',height:'500px'}} center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }


import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class MapLeaflet extends React.Component {
  render() {
    return (
      <Map style={{width:'500px',height:'500px'}}
        center={[50, 10]}
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
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapLeaflet;
