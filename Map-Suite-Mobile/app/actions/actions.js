import {
  FETCHING_ALERT,
  FETCHING_ALERT_SUCCESS,
  FETCHING_ALERT_FAILURE,
  FETCHING_TRAFFIC,
  FETCHING_TRAFFIC_SUCCESS,
  FETCHING_TRAFFIC_FAILURE,
} from './constants';
import getMessage from '../services/Transtar';

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
