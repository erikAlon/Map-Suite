import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Location, Permissions } from 'expo';
import Map from './app/components/Map';
import YelpService from './app/services/yelp';

const deltas = {
  latitudeDelta: 0.0005,
  longitudeDelta: 0.0005,
};

export default class App extends React.Component {
  state = {
    isLoading: true,
    region: null,
    coffeeShops: [],
  };

  componentWillMount() {
    this.getLocationAsync();
  }

  getCoffeeShops = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };

    const coffeeShops = await YelpService.getCoffeeShops(userLocation);

    this.setState({ isLoading: false, coffeeShops });

    console.log('My coffee shops here ==> ', this.state.coffeeShops);
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to acess location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas,
    };

    await this.setState({ region });

    await this.getCoffeeShops();
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    const { region, coffeeShops } = this.state;
    return <Map region={region} places={coffeeShops} />;
  }
}

const styles = StyleSheet.create({
  flex: 1,
});
