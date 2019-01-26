import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import TrafficMap from './app/components/maps/TrafficMap';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TrafficMap />
      </Provider>
    );
  }
}
