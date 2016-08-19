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
    if(goToQuestions)
    return(
      <View style={styles.wrapper}>
        <Nav />
        <Body />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff00f',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    color: "#00f0ff"
  }

})


Page.external = true;
module.exports = Page;
