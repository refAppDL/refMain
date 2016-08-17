import React, { Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage
} from 'react-native';

// var Page = require("./Page.js")
var Opening = require("./Opening.js")


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nothing: "nada"
    }
  }
  render(){
    return(
      <Opening/>
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
