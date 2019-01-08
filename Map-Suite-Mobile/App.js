import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <View class="rotated" style={styles.container} />
        <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
        <View style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
});
