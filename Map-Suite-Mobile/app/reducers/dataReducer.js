import {
  FETCHING_ALERT,
  FETCHING_ALERT_SUCCESS,
  FETCHING_ALERT_FAILURE,
  FETCHING_LOCATION,
  FETCHING_LOCATION_SUCCESS,
  FETCHING_LOCATION_FAILURE,
} from '../actions/constants';

const initialState = {
  message: '',
  messageFetched: false,
  messageIsFetching: false,
  messageError: false,
  coords: {},
  coordsFetched: false,
  coordsIsFetching: false,
  coordsError: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALERT:
      return {
        ...state,
        messageFetched: false,
        messageIsFetching: true,
      };

    case FETCHING_ALERT_SUCCESS:
      return {
        ...state,
        message: action.message,
        messageFetched: true,
        messageIsFetching: false,
      };

    case FETCHING_ALERT_FAILURE:
      return {
        ...state,
        messageError: true,
      };

    case FETCHING_LOCATION:
      return {
        ...state,
        coordsFetched: false,
        coordsIsFetching: true,
      };

    case FETCHING_LOCATION_SUCCESS:
      return {
        ...state,
        coords: action.coords,
        coordsFetched: true,
        coordsIsFetching: false,
      };

    case FETCHING_LOCATION_FAILURE:
      return {
        ...state,
        coordsError: true,
      };

    default:
      return state;
  }
}
