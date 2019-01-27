import {
  FETCHING_ALERT,
  FETCHING_ALERT_SUCCESS,
  FETCHING_ALERT_FAILURE,
  FETCHING_LOCATION,
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
  FETCHING_TRAFFIC,
  FETCHING_TRAFFIC_SUCCESS,
  FETCHING_TRAFFIC_FAILURE,
} from './constants';
import getMessage from '../services/Transtar';
import { Location, Permissions } from 'expo';

export function getAlert() {
  return {
    type: FETCHING_ALERT,
  };
}

export function getAlertSuccess(message) {
  return {
    type: FETCHING_ALERT_SUCCESS,
    message: message,
  };
}

export function getAlertFailure() {
  return {
    type: FETCHING_ALERT_FAILURE,
  };
}

export function fetchAlert() {
  return (dispatch) => {
    dispatch(getAlert());
    getMessage()
      .then((message) => {
        dispatch(getAlertSuccess(message));
      })
      .catch((error) => {
        console.log('Error in fetchAlert(): ', error);
      });
  };
}

export function getLocation() {
  return {
    type: FETCHING_LOCATION,
  };
}

export function getLocationSuccess(coords) {
  return {
    type: FETCHING_LOCATION_SUCCESS,
    coords: coords,
  };
}

export function getLocationFailure() {
  return {
    type: FETCHING_LOCATION_FAILURE,
  };
}

export function fetchLocation() {
  return (dispatch) => {
    dispatch(getLocation());

    getPosition = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        console.log({
          errorMessage: 'Permission to access location was denied',
        });
      }

      let watch = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.BestForNavigation, timeInterval: 0 },
        (location) => {
          console.log('Location in actions fetchLocation(): ', location);
          dispatch(
            getLocationSuccess({
              longitude: location.coords.longitude,
              latitude: location.coords.latitude,
            })
          );
        }
      );
    };

    getPosition();
  };
}

export function getTraffic() {
  return {
    type: FETCHING_TRAFFIC,
  };
}

export function getTrafficSuccess(data) {
  return {
    type: FETCHING_TRAFFIC_SUCCESS,
    data,
  };
}

export function getTrafficFailure() {
  return {
    type: FETCHING_TRAFFIC_FAILURE,
  };
}

export function fetchTraffic() {
  return (dispatch) => {
    dispatch(getTraffic());
    // call service function to retrieve traffic data in this action
  };
}
