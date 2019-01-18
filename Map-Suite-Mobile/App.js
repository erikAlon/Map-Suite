import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
  state = {
    alert: '',
  };

  componentWillMount() {
    fetch('https://map-suite-mobile.firebaseapp.com/transtar')
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        this.setState({
          alert: resJson.message,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // getCoffeeShops = async () => {
  //   const { latitude, longitude } = this.state.region;
  //   const userLocation = { latitude, longitude };

  //   // const coffeeShops = await YelpService.getCoffeeShops(userLocation);

  //   this.setState({ isLoading: false, coffeeShops });
  // };

  // getLocationAsync = async () => {
  //   let { status } = await Permissions.askAsync(Permissions.LOCATION);

  //   if (status !== 'granted') {
  //     this.setState({
  //       errorMessage: 'Permission to acess location was denied',
  //     });
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   const region = {
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //     ...deltas,
  //   };

  //   await this.setState({ region });

  //   await this.getCoffeeShops();
  // };

  render() {
<<<<<<< HEAD
    return (
      <View style={styles.container}>
        <Text>{this.state.alert}</Text>
      </View>
    );
=======
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    // const { region, coffeeShops } = this.state;
    // return <Map region={region} places={coffeeShops} />;
>>>>>>> refs/remotes/origin/master
  }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    justifyContent: 'center',
    color: 'green',
  },
=======
  flex: 1,
>>>>>>> refs/remotes/origin/master
});
