import {
  FETCHING_ALERT,
  FETCHING_ALERT_SUCCESS,
  FETCHING_TRAFFIC_FAILURE,
} from '../actions/constants';

const initialState = {
  message: '',
  messageFetched: false,
  messageIsFetching: false,
  messageError: false,
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

    case FETCHING_TRAFFIC_FAILURE:
      return {
        ...state,
        messageError: true,
      };

    default:
      return state;
  }
}
