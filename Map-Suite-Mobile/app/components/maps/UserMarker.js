import React from 'react';
import { MapView, Location, Permissions } from 'expo';
import { View, Text, StyleSheet } from 'react-native';

export default class UserMarker extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      coords: {
        longitude: -87.638717,
        latitude: 41.881296,
      },
    };
    this.getPosition();
  }

  getPosition = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let watch = await Location.watchPositionAsync(
      { accuracy: Location.Accuracy.BestForNavigation, timeInterval: 0 },
      (location) => {
        this.setState({
          coords: { longitude: location.coords.longitude, latitude: location.coords.latitude },
        });
      }
    );
  };

  render() {
    if (this.state.errorMessage.length) {
      console.log('Error in UserMarker: ', this.state.errorMessage);
    }
    return (
      <View>
        <View style={styles.coords}>
          <Text style={styles.text}>latitude: {this.state.coords.latitude}</Text>
          <Text style={styles.text}>longitutde: {this.state.coords.longitude}</Text>
        </View>
        <MapView.Marker coordinate={this.state.coords} identifier="driver" pinColor="green" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coords: {
    position: 'absolute',
    top: 750,
    left: 5,
  },
  text: {
    color: 'rgb(0, 155, 0)',
    backgroundColor: 'beige',
  },
});
