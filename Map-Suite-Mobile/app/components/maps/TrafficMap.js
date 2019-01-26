import React from 'react';
import { MapView } from 'expo';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchAlert } from '../../actions/actions';
// import AlertMarker from './AlertMarker'

const chicago = {
  latitude: 41.881296,
  longitude: -87.638717,
  latitudeDelta: 0.09,
  longitudeDelta: 0.05,
};

/******************************************************************************************************************************************************************************************** */
class TrafficMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.fetchAlert();
  }

  render() {
    console.log('My message in props after fetchAlert() in TrafficMap.js: ', this.props.message);
    return <MapView style={styles.trafficMap} initialRegion={chicago} />;
  }
}

/******************************************************************************************************************************************************************************************** */
const styles = StyleSheet.create({
  trafficMap: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    message: state.appData.message,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAlert: () => dispatch(fetchAlert()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrafficMap);
