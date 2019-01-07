import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingText: true,
    };
    setInterval(
      () => this.setState((previousState) => ({ isShowingText: !previousState.isShowingText })),
      1000
    );
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="This is more text for blinky" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
