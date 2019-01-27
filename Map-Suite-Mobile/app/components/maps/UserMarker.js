import React from 'react';
import { MapView } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class UserMarker extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.coords}>
          <Text style={styles.text}>
            latitude: {this.props.coordsFetched ? this.props.coords.latitude : 0}
          </Text>
          <Text style={styles.text}>
            longitutde: {this.props.coordsFetched ? this.props.coords.longitude : 0}
          </Text>
        </View>

        <MapView.Marker
          coordinate={this.props.coordsFetched ? this.props.coords : this.props.local}
          identifier="driver"
          pinColor="green"
        />
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

const mapStateToProps = (state) => {
  return {
    coordsFetched: state.appData.coordsFetched,
    coords: state.appData.coords,
  };
};

export default connect(mapStateToProps)(UserMarker);
