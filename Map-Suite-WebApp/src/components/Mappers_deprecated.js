// import React, { Component } from 'react';
// import { geolocated } from 'react-geolocated';
// // import Mappers from './components/Mappers';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       // coords: this.props.coords,
//       isLoading: true,
//     };
//   }

//   render() {
//     return !this.props.isGeolocationAvailable ? (
//       <div> Your browser does not support Geolocation!</div>
//     ) : !this.props.isGeolocationEnabled ? (
//       <div> Geolocation is not enabled</div>
//     ) : !this.props.coords ? (
//       <div>Getting the location data&hellip; </div>
//     ) : (
//       <table>
//         <tbody>
//           <tr>
//             <td>latitude: </td>
//             <td>{this.props.coords.latitude}</td>
//           </tr>
//           <tr>
//             <td>longitude: </td>
//             <td>{this.props.coords.longitude}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// export default geolocated({
//   positionOptions: {
//     enableHighAccuracy: true,
//   },
//   userDecisionTimeout: 5000,
// })(App);
