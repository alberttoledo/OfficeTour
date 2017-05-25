import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';

import Main from './components/main';

export default class OfficeTour extends React.Component {
  render() {
    return (
      <View>
        <Main />
      </View>
    );
  }
};

AppRegistry.registerComponent('OfficeTour', () => OfficeTour);
