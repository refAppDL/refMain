var Nav = require("./Nav.js");
var Body = require("./Body.js");


import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

class Page extends Component {
  constructor(props){
    super(props);
  }
  render(){

    return(
      <View style={styles.wrapper}>
        <Nav />
        <Body destination = {this.props.destination}/>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  text: {
    fontSize: 40,
    color: "#00f0ff"
  }

})


Page.external = true;
module.exports = Page;
