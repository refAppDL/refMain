import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

var Page = require("./ios/components/Page.js")
var Opening = require("./ios/components/Opening.js")


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nothing: "nada"
    }
  }
  render(){
    return(
      <Text style={styles.main}>Now we begin the App process</Text>
    )
  }
}

var styles = StyleSheet.create({
  main: {
    color: 'green',
    marginTop: 300,
  }
})


App.external = true;
module.exports = App;
