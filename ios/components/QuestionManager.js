var AskModal = require("./AskModal.js");

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


class QuestionManager extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){

    return(
      <View>
        <Text> This is the questions page </Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  main: {
    color: 'blue',
    alignSelf: 'center',
    flexDirection: 'row'
  }
});
QuestionManager.external = true;
module.exports = QuestionManager;
