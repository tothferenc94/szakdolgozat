import React, {Component} from 'react';
import {View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import MainMenu from './src/mainManu';

export default class App extends Component {
  render() {
    return(
    <Router>
      <Scene key="root">
        <Scene
          key="menu"
          title="Menu"
          component={MainMenu}
          initial
        />
      </Scene>
    </Router>
    );
  }
}