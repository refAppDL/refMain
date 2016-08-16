/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var App = require("./ios/components/App.js");

class refMain extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('refMain', () => refMain);
