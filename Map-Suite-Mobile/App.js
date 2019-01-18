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

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.alert}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    color: 'green',
  },
});
