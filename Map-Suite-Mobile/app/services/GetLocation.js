import { Location, Permissions } from 'expo';
import { getLocationSuccess } from '../actions/actions';

export default async (dispatch) => {
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
