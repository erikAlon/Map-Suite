import React from 'react';
import { MapView } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchAlert, fetchLocation } from '../../actions/actions';
import UserMarker from './UserMarker';

const chicago = {
  latitude: 41.881296,
  longitude: -87.638717,
};

const houston = {
  latitude: 29.75431,
  longitude: -95.366501,
  latitudeDelta: 0.09,
  longitudeDelta: 0.05,
};

const delta = {
  latitudeDelta: 0.09,
  longitudeDelta: 0.05,
};

let renders = 0;

/******************************************************************************************************************************************************************************************** */
class TrafficMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.fetchLocation();
    this.props.fetchAlert();
  }

  render() {
    return (
      <MapView
        style={styles.trafficMap}
        region={
          this.props.coordsFetched ? { ...this.props.coords, ...delta } : { ...chicago, ...delta }
        }
      >
        {/* <UserMarker /> */}
      </MapView>
    );
  }
}

/******************************************************************************************************************************************************************************************** */
const styles = StyleSheet.create({
  trafficMap: {
    flex: 1,
    position: 'relative',
  },
});

function mapStateToProps(state) {
  return {
    message: state.appData.message,
    coords: state.appData.coords,
    coordsFetched: state.appData.coordsFetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAlert: () => dispatch(fetchAlert()),
    fetchLocation: () => dispatch(fetchLocation()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrafficMap);

// fetchLocation() as action imported
// constants for fetch/fail/success location
// action to dispatch
// getLocation() as a service imported into action
// reducer to manage state with location info
