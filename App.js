import React, {Component} from 'react';
import Welcome from './src/welcome';
import {Router, Scene} from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return(
    <Router>
      <Scene key="root">
        <Scene
          key="fokepernyo"
          title="kezdokepernyo"
          component={Welcome}
          initial
        />
      </Scene>
    </Router>
    );
  }
}