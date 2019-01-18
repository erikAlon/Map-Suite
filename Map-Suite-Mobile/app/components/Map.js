import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MapView } from 'expo';

const Marker = MapView.Marker;

export default class Map extends React.Component {
  renderMarkers() {
    return this.props.places.map((place, i) => {
      return <Marker key={i} title={place.name} coordinate={place.coords} />;
    });
  }

  render() {
    const { region } = this.props.region;
    return (
      <MapView style={styles.container} region={region} pinColor={'blue'}>
        {this.renderMarkers()}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
